import { APIConfig } from '../types/config';
import type { APILog } from '../types/log';
import type { ChatMessage, APIResponse } from './api-types';
import { APIError } from './api-error';

export async function sendMessage(
  config: APIConfig,
  messages: ChatMessage[],
  onLog: (log: APILog) => void
): Promise<string> {
  const requestBody = {
    model: config.model,
    messages,
    temperature: 0.7
  };

  onLog({
    timestamp: Date.now(),
    type: 'request',
    content: requestBody
  });

  try {
    const response = await fetch(config.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    const data: APIResponse = await response.json();

    if (!response.ok) {
      onLog({
        timestamp: Date.now(),
        type: 'error',
        content: data
      });
      throw new APIError(
        data.error?.message || 'Failed to send message to API',
        response.status,
        data
      );
    }

    onLog({
      timestamp: Date.now(),
      type: 'response',
      content: data
    });

    if (!data.choices?.[0]?.message?.content) {
      throw new APIError('Invalid response format from API');
    }

    return data.choices[0].message.content;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }

    onLog({
      timestamp: Date.now(),
      type: 'error',
      content: error instanceof Error ? error.message : 'Unknown error'
    });
    
    throw new APIError(
      error instanceof Error ? error.message : 'Failed to communicate with API'
    );
  }
}
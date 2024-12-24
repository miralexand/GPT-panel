import React, { useState, useEffect } from 'react';
import { Message as MessageComponent } from './components/Message';
import { ChatInput } from './components/ChatInput';
import { SettingsModal } from './components/SettingsModal';
import { APILogs } from './components/APILogs';
import { Settings, MessageSquare } from 'lucide-react';
import type { Message } from './types/chat';
import type { APIConfig } from './types/config';
import type { APILog } from './types/log';
import { sendMessage } from './utils/api';
import { loadConfig, saveConfig } from './utils/storage';
import { APIError } from './utils/api-error';

export default function App() {
  const [config, setConfig] = useState<APIConfig>(loadConfig);
  const [showSettings, setShowSettings] = useState(!config.apiKey);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [logs, setLogs] = useState<APILog[]>([]);
  const [showLogs, setShowLogs] = useState(true);
  const [isLogsMinimized, setIsLogsMinimized] = useState(false);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chat_messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  }, [messages]);

  const handleLog = (log: APILog) => {
    setLogs(prev => [...prev, log]);
  };

  const handleSendMessage = async (content: string) => {
    if (!config.apiKey) {
      setShowSettings(true);
      return;
    }

    const newMessage: Message = {
      role: 'user',
      content,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    try {
      const apiMessages = messages.map(({ role, content }) => ({ role, content }));
      apiMessages.push({ role: 'user', content });

      const response = await sendMessage(config, apiMessages, handleLog);

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = error instanceof APIError 
        ? error.message 
        : 'An unexpected error occurred';
        
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Error: ${errorMessage}`,
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveConfig = (newConfig: APIConfig) => {
    saveConfig(newConfig);
    setConfig(newConfig);
    setShowSettings(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-semibold">Elegant GPT Chat</h1>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          config={config}
          onSave={handleSaveConfig}
          onClose={() => setShowSettings(false)}
          showCancel={!!config.apiKey}
        />
      )}

      {/* Chat Messages */}
      <div className="flex-grow overflow-auto">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-180px)] text-gray-500">
              <MessageSquare className="w-12 h-12 mb-4" />
              <p className="text-lg">Start a conversation with GPT</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <MessageComponent key={index} message={message} />
            ))
          )}
        </div>
      </div>

      {/* Chat Input */}
      <ChatInput onSend={handleSendMessage} disabled={isLoading || !config.apiKey} />

      {/* API Logs */}
      {showLogs && (
        <APILogs
          logs={logs}
          onClose={() => setShowLogs(false)}
          isMinimized={isLogsMinimized}
          onToggleMinimize={() => setIsLogsMinimized(!isLogsMinimized)}
        />
      )}
    </div>
  );
}
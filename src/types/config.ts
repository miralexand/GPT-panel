export interface APIConfig {
  endpoint: string;
  apiKey: string;
  model: string;
}

export const DEFAULT_CONFIG: APIConfig = {
  endpoint: 'https://openkey.cloud/v1/chat/completions',
  apiKey: '',
  model: 'gpt-3.5-turbo'
};
import { APIConfig, DEFAULT_CONFIG } from '../types/config';

export function loadConfig(): APIConfig {
  const stored = localStorage.getItem('api_config');
  if (stored) {
    return JSON.parse(stored);
  }
  return DEFAULT_CONFIG;
}

export function saveConfig(config: APIConfig): void {
  localStorage.setItem('api_config', JSON.stringify(config));
}
export interface Model {
  id: string;
  name: string;
  description: string;
  contextWindow: number;
  isCustom?: boolean;
}

export const DEFAULT_MODELS: Model[] = [
  {
    id: 'gpt-4-turbo-preview',
    name: 'GPT-4 Turbo',
    description: 'Most capable model for tasks of any complexity',
    contextWindow: 128000
  },
  {
    id: 'gpt-4',
    name: 'GPT-4',
    description: 'More capable than GPT-3.5, better at complex tasks',
    contextWindow: 8192
  },
  {
    id: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    description: 'Most capable GPT-3.5 model, optimized for chat',
    contextWindow: 16385
  },
  {
    id: 'gpt-3.5-turbo-16k',
    name: 'GPT-3.5 Turbo 16K',
    description: 'Same capabilities as standard GPT-3.5 Turbo with 4x context',
    contextWindow: 16384
  }
];
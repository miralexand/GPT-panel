import React from 'react';
import { ModelSelect } from './ModelSelect';
import { APIConfig } from '../types/config';
import type { Model } from '../types/models';

interface SettingsModalProps {
  config: APIConfig;
  onSave: (config: APIConfig) => void;
  onClose: () => void;
  showCancel?: boolean;
}

export function SettingsModal({ config, onSave, onClose, showCancel }: SettingsModalProps) {
  const [formData, setFormData] = React.useState(config);
  const [customModels, setCustomModels] = React.useState<Model[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleCustomModel = (model: Model) => {
    setCustomModels(prev => [...prev, model]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">API Settings</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                API Endpoint
              </label>
              <input
                type="url"
                value={formData.endpoint}
                onChange={(e) => setFormData(prev => ({ ...prev, endpoint: e.target.value }))}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://api.openai.com/v1/chat/completions"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                API Key
              </label>
              <input
                type="password"
                value={formData.apiKey}
                onChange={(e) => setFormData(prev => ({ ...prev, apiKey: e.target.value }))}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="sk-..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model
              </label>
              <ModelSelect
                value={formData.model}
                onChange={(modelId) => setFormData(prev => ({ ...prev, model: modelId }))}
                onCustomModel={handleCustomModel}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            {showCancel && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
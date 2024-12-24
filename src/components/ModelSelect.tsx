import React from 'react';
import { Model, DEFAULT_MODELS } from '../types/models';

interface ModelSelectProps {
  value: string;
  onChange: (modelId: string) => void;
  onCustomModel: (model: Model) => void;
}

export function ModelSelect({ value, onChange, onCustomModel }: ModelSelectProps) {
  const [customModel, setCustomModel] = React.useState('');
  const [showCustomInput, setShowCustomInput] = React.useState(false);

  const handleCustomModelAdd = () => {
    if (customModel.trim()) {
      const newModel: Model = {
        id: customModel,
        name: customModel,
        description: 'Custom model',
        contextWindow: 4096,
        isCustom: true
      };
      onCustomModel(newModel);
      onChange(customModel);
      setCustomModel('');
      setShowCustomInput(false);
    }
  };

  return (
    <div className="space-y-2">
      <select
        value={value}
        onChange={(e) => {
          if (e.target.value === 'custom') {
            setShowCustomInput(true);
          } else {
            onChange(e.target.value);
          }
        }}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {DEFAULT_MODELS.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
        <option value="custom">Custom Model...</option>
      </select>

      {showCustomInput && (
        <div className="flex gap-2">
          <input
            type="text"
            value={customModel}
            onChange={(e) => setCustomModel(e.target.value)}
            placeholder="Enter custom model identifier"
            className="flex-grow p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleCustomModelAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
          <button
            onClick={() => {
              setShowCustomInput(false);
              setCustomModel('');
            }}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
          >
            Cancel
          </button>
        </div>
      )}

      {DEFAULT_MODELS.find(m => m.id === value)?.description && (
        <p className="text-sm text-gray-600">
          {DEFAULT_MODELS.find(m => m.id === value)?.description}
        </p>
      )}
    </div>
  );
}
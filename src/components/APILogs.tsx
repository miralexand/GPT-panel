import React from 'react';
import { Terminal, X, Maximize2, Minimize2 } from 'lucide-react';
import type { APILog } from '../types/log';

interface APILogsProps {
  logs: APILog[];
  onClose: () => void;
  isMinimized: boolean;
  onToggleMinimize: () => void;
}

export function APILogs({ logs, onClose, isMinimized, onToggleMinimize }: APILogsProps) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  const getLogColor = (type: APILog['type']) => {
    switch (type) {
      case 'request': return 'text-blue-600';
      case 'response': return 'text-green-600';
      case 'error': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className={`fixed right-4 bottom-4 bg-white rounded-lg shadow-lg ${isMinimized ? 'w-48' : 'w-96'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b bg-gray-50 rounded-t-lg">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span className="font-medium">API Logs</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleMinimize}
            className="p-1 hover:bg-gray-200 rounded"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Logs */}
      {!isMinimized && (
        <div className="h-64 overflow-auto p-4 space-y-2 text-sm font-mono">
          {logs.map((log, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">{formatTime(log.timestamp)}</span>
                <span className={getLogColor(log.type)}>{log.type.toUpperCase()}</span>
              </div>
              <pre className="whitespace-pre-wrap break-words bg-gray-50 p-2 rounded">
                {JSON.stringify(log.content, null, 2)}
              </pre>
            </div>
          ))}
          {logs.length === 0 && (
            <div className="text-gray-500 text-center py-4">
              No logs yet
            </div>
          )}
        </div>
      )}
    </div>
  );
}
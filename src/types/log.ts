export interface APILog {
  timestamp: number;
  type: 'request' | 'response' | 'error';
  content: any;
}

export interface APILogState {
  logs: APILog[];
  isVisible: boolean;
}
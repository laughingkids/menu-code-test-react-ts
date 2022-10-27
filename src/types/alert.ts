export type AlertType = 'warning' | 'error' | 'info';
export type Alert = {
  type: AlertType;
  message?: string;
};

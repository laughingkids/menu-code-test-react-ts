import {useState} from 'react';
import useTimeout from '../../../hooks/common/use-timeout';
import {Alert} from '../../../types/alert';
import {MessageAlertWrapper} from './styled';

type MessageAlertProps = Alert & {
  hiddenTimeout?: number;
};

export const MessageAlert = ({
  message,
  type,
  hiddenTimeout,
}: MessageAlertProps): JSX.Element => {
  const [hide, setHide] = useState(message?.length === 0);
  if (hiddenTimeout) {
    useTimeout(() => {
      if (!hide && message) {
        setHide(true);
      }
    }, hiddenTimeout);
  }
  if (!message || hide) {
    return <></>;
  }
  return (
    <MessageAlertWrapper {...{message, type}}>{message}</MessageAlertWrapper>
  );
};

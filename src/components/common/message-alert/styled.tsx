import styled from '@emotion/styled';
import {Alert} from '../../../types/alert';
const alertTextStyle = (color: string) => `color: ${color};`;

export const MessageAlertWrapper = styled.p`
  margin: 0;
  font-weight: bold;
  ${(props: Alert) => {
    switch (props.type) {
      case 'info':
        return alertTextStyle('blue');
      case 'warning':
        return alertTextStyle('yellow');
      case 'error':
        return alertTextStyle('red');
    }
  }};
`;

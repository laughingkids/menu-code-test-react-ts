import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {constants} from './constants';

export const StyledContainer = styled.div`
  width: calc(100% - ${constants.sidebarWidth});
  margin: auto;
`;

export const FlexBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

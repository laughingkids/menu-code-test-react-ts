import styled from '@emotion/styled';
import * as React from 'react';
import {colors} from '../../styles/colors';
import {constants} from '../../styles/constants';

export const Header = (): JSX.Element => {
  return <HeaderWrapper>123</HeaderWrapper>;
};

const HeaderWrapper = styled.header`
  top: 0;
  width: 100%;
  position: fixed;
  background-color: #f1f2f4;
  height: ${constants.headerHeight};
`;

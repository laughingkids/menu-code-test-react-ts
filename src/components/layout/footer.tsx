import styled from '@emotion/styled';
import * as React from 'react';
import {colors} from '../../styles/colors';
import {constants} from '../../styles/constants';

export const Footer = (): JSX.Element => {
  return <FooterWrapper>123</FooterWrapper>;
};

const FooterWrapper = styled.footer`
  bottom: 0;
  width: 100%;
  position: fixed;
  background-color: #2d333f;
  height: ${constants.headerHeight};
`;

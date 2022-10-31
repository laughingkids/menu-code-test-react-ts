import styled from '@emotion/styled';
import * as React from 'react';
import {colors} from '../../../styles/colors';
import {constants} from '../../../styles/constants';

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <span>Applied: Senior FE Engineer</span>
      <span>Candidate: Thomas Wang</span>
      <span>Date: {new Date().toLocaleDateString()}</span>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  bottom: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  padding: 0 1rem;
  color: ${colors.white};
  background-color: #2d333f;
  justify-content: space-evenly;
  height: ${constants.headerHeight};
`;

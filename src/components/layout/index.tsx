import styled from '@emotion/styled';
import * as React from 'react';
import {constants} from '../../styles/constants';
import {Footer} from './footer';
import {Header} from './header';
import {Sidebar} from './sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <ContentContainer>{children}</ContentContainer>
      </main>
      <Footer />
    </div>
  );
};

const ContentContainer = styled.div`
  padding: 1.5rem;
  over-flow: hidden;
  background-color: #f1f2f4;
  margin-top: ${constants.headerHeight};
  margin-left: ${constants.sidebarWidth};
  margin-bottom: ${constants.footerHeight};
`;

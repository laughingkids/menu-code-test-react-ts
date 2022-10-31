import styled from '@emotion/styled';
import * as React from 'react';
import {colors} from '../../../styles/colors';
import {constants} from '../../../styles/constants';
import PeopleSelector from '../../people-selector';
import {Receipt} from '../../receipt';

export const Sidebar = (): JSX.Element => {
  return (
    <SidebarWrapper>
      <PeopleSelector />
      <Receipt />
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  left: 0;
  padding: 1rem;
  position: fixed;
  font-weight: bold;
  color: ${colors.white};
  top: ${constants.headerHeight};
  width: ${constants.sidebarWidth};
  background-color: ${colors.primary};
  height: calc(100vh - ${constants.headerHeight} - ${constants.footerHeight});
`;

import styled from '@emotion/styled';
import * as React from 'react';
import {usePeople} from '../../../hooks/features/use-people';
import {useAppSelector} from '../../../hooks/common/use-redux';
import {constants} from '../../../styles/constants';
import {MessageAlert} from '../message-alert';

export const Header = (): JSX.Element => {
  const [people] = usePeople();
  const {message} = useAppSelector(state => state.order);
  const {canOrder, ...alert} = message;

  return (
    <HeaderWrapper>
      <BrandLogo />
      {!canOrder && <MessageAlert {...alert} hiddenTimeout={2000} />}
      <HeaderLabel>Ordering for Table 1 ({people} People)</HeaderLabel>
    </HeaderWrapper>
  );
};

const BrandLogo = styled.div`
  height: 2rem;
  margin: 0.5rem 1rem;
  width: ${constants.sidebarWidth};
  background: url(//cdn.otstatic.com/cfe/10/images/opentable-logo-153e80.svg)
    no-repeat;
`;

const HeaderWrapper = styled.header`
  top: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #f1f2f4;
  justify-content: space-between;
  height: ${constants.headerHeight};
`;

const HeaderLabel = styled.p`
  margin: 0.5rem 1rem;
  font-weight: bold;
`;

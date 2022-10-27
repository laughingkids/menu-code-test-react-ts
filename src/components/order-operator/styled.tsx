import styled from '@emotion/styled';
import {colors} from '../../styles/colors';

export const OrderButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2.5rem;
  border: none;
  background: ${colors.primary};
  cursor: pointer;
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.5rem;
  &:hover {
    background: ${colors.primaryActive};
  }
`;

export const OrderOperatorWrapper = styled.div`
  display: flex;
  margin: 1rem auto;
  align-items: center;
  justify-content: space-evenly;
`;

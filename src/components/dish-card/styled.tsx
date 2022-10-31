import styled from '@emotion/styled';
import {colors} from '../../styles/colors';

export const DishCardWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 0.5rem;
  height: 400px;
  width: 300px;
  margin: 0.25rem;
`;

export const DishCardImg = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  color: ${colors.white};
  background-color: ${colors.primary};
  cursor: pointer;
  &:hover {
    background: ${colors.primaryActive};
    font-weight: bold;
    font-size: 2.5rem;
  }
`;

export const DishLabel = styled.p`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

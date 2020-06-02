import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #ff9000;
  color: #312e38;
  border-radius: 8px;
  border: 0;
  padding: 0 16px;
  height: 54px;
  width: 100%;
  margin-top: 8px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

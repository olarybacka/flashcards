import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const CardWithButtons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 20px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  color: ${colors.accent};
  background: transparent;
  padding: 0 5px;
  font-size: 40px;
  cursor: pointer;
`;

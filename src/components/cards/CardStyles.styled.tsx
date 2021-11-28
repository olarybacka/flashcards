import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CardStyled = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${colors.border};
  background: ${colors.white};
`;

import styled, { css } from 'styled-components';
import { colors } from '../../assets/theme';

export const Progress = styled.div<{ progress: number }>`
  background-color: ${colors.accent};
  transition: width 0.8s;
  height: 5px;
  max-width: 100%;

  ${({ progress }) => css`
    width: ${progress}%;
  `};
`;
export const Bar = styled.div`
  width: 100%;
  max-width: 400px;
  height: 5px;
  background-color: ${colors.main};
  margin: 20px auto;
`;

import styled, { css } from 'styled-components';

export const Progress = styled.div<{ progress: number }>`
  background-color: dodgerblue;;
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
  background-color: lightgrey;
  margin: 20px auto;
  padding: 1px;
`;

import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CardContainer = styled.article`
  height: 500px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${colors.white};
  perspective: 3000px;
`;

export const PrevButton = styled.button`
  content: '<';
`;

export const NextButton = styled.button``;

const Card = styled.div`
  position: absolute;
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #808080;
`;
export const CardFront = styled(Card)`
  background: #e9e9e9;
`;
export const CardBack = styled(Card)`
  transform: rotateY(180deg);
  background: #d8d8d8;
`;

export const Inner = styled.div<{ visibleSide: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.4s ease-out;
  ${({ visibleSide }) =>
    visibleSide === 'front' && `transform: rotateY(180deg)`}
`;

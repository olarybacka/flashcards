import styled from 'styled-components';
import { colors } from '../../assets/theme';

export const FormContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  margin: 20px;
  display: flex;
  margin: 20px auto;
  width: 100%;
  max-width: 400px;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonStyled = styled.button`
  background: ${colors.accent};
  color: white;
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
`;

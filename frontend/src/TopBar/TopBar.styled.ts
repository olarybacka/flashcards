import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../assets/theme';

export const Menu = styled.article`
  padding: 10px;
  background: ${colors.accent};
  display: flex;
  justify-content: center;
`;

export const LinkStyled = styled(Link)`
  color: ${colors.background};
  margin: 0 20px;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 27px;
`;

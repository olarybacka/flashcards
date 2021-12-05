import { LinkStyled, Menu } from './TopBar.styled';

export const TopBar = () => {
  return (
    <Menu>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/addCard">Add a card </LinkStyled>
      <LinkStyled to="/addCards">Add many cards </LinkStyled>
    </Menu>
  );
};

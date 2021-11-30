import { Link } from 'react-router-dom';
import { Menu } from './AppContainer.styled';
export const AppContainer = () => {
  return (
    <Menu>
      <Link to="/addCard">Add Card </Link>
    </Menu>
  );
};

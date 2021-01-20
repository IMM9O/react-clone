import { Nav, NavLink, NavIcon, Bars } from './Navbar.styles';

export default function Navbar({ toggleSidebar }) {
  return (
    <Nav>
      <NavLink to="/"> Pizza </NavLink>

      <NavIcon onClick={toggleSidebar}>
         <p>Pizza</p>
         <Bars />
      </NavIcon>
    </Nav>
  );
}

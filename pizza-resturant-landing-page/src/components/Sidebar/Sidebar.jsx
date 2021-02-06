import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from './Sidebar.styles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink
          activeClass="active"
          to="pizzas"
          spy={true}
          smooth={true}
          duration={500}
        >
          Pizzas
        </SidebarLink>
        <SidebarLink
          activeClass="active"
          to="desserts"
          spy={true}
          smooth={true}
          duration={500}
        >
          Desserts
        </SidebarLink>
        <SidebarLink
          activeClass="active"
          to="feature"
          spy={true}
          smooth={true}
          duration={500}
        >
          Pizza of the day
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

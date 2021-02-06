import { useContext } from 'react';
import { SidebarContext } from '../../data/context/SidebarContext';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroHeader,
  HeroSlug,
  HeroAction,
} from './Hero.styles';

const Herero = ({ children, ...restProps }) => {
  const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <>
      <HeroContainer {...restProps}>
      <Navbar toggleSidebar={toggleSidebar} />
        <HeroContent>
          <HeroItems>
            <HeroHeader>Pizza in less than min!</HeroHeader>
            <HeroSlug> Hey Pizza Lovers</HeroSlug>
            <HeroAction> {`Order Now ->`} </HeroAction>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
    </>
  );
};

export default Herero;

import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  padding: 0 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  height: 80px;
  font-weight: 700;
  /* position: sticky;
  top: 0;
  z-index: 10;
  margin-top: -80px; */
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavLink = styled(RouterLink)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    right: 25px;
  }
`;

export const ScrollLinkItem = styled(ScrollLink)``;

export const NavIcon = styled.div`
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-175%, 100%);
    font-weight: 500;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

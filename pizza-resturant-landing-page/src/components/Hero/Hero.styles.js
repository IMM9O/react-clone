import styled from 'styled-components';

import HeroImage from './../../assets/images/sweet-3.jpg';

export const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${HeroImage}) center center fixed;
  background-size: cover;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 80px); // subtract the hight of navbar;
  max-height: 100%;
  width: 100%;
  padding: 0rem calc((100% - 1300px) / 2);
`;

export const HeroItems = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;
  height: 100vh;
  max-height: 100%;
  width: 650px;
  padding: 0 2rem;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroHeader = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  letter-spacing: 3px;
  box-shadow: 3px 5px #e9ba23;
  margin-bottom: 1rem;
`;

export const HeroSlug = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroAction = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: #000;
  }
`;

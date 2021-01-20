import styled from 'styled-components';
import FeaturePic from '../../assets/images/featured2.jpg';

export const FeatureContainer = styled.div`
  height: 400px;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic}) center center fixed;
  background-size: cover;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  height: 100%;
`;

export const FeatureHeader = styled.h2`
  font-size: clamp(2.5rem, 10vw, 5rem);
  letter-spacing: 2px;
  margin-bottom: 2rem;
`;

export const FeatureDescription = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 1rem;
`;

export const FeatureAction = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #ffc500;
  transition: 0.2 ease-out;
  &:hover {
    background: #e31837;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: #000;
  }
`;

import {
  FeatureContainer,
  FeatureWrapper,
  FeatureHeader,
  FeatureDescription,
  FeatureAction,
} from './Feature.styles';

import { Element } from 'react-scroll';

export default function Feature() {
  return (
      <Element name="feature">

    <FeatureContainer>
      <FeatureWrapper>
        <FeatureHeader>Pizza of the Day</FeatureHeader>
        <FeatureDescription>
          Triple Treat Box Includes 2 medium pizzas (2-Topping CYO or Recipe){' '}
        </FeatureDescription>
        <FeatureAction>Add to the cart</FeatureAction>
      </FeatureWrapper>
    </FeatureContainer>
      </Element>
  );
}

import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';

import { products1, products2 } from './data/Products';

import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import SidenavContextProvider from './data/context/SidebarContext';

function App() {
  return (
    <Router>
      <SidenavContextProvider>
        <Hero />
        <Element name="pizzas">
          <Products data={products1} heading="Choose your Pizza" />
        </Element>
        <Feature />
        <Element name="desserts">
          <Products data={products2} heading="Choose your dessert" />
        </Element>
        <Footer />
      </SidenavContextProvider>
    </Router>
  );
}

export default App;

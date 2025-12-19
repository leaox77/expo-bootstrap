import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importamos componentes
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import GridSystem from './components/GridSystem';
import ComponentsDemo from './components/ComponentsDemo';
import UtilitiesDemo from './components/UtilitiesDemo';
import CardsSection from './components/ImageCard';
import AccordionDemo from './components/AccordionDemo';
import CarouselDemo from './components/CarouselDemo';
import FormDemo from './components/FormDemo';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroComponent />
      <GridSystem />
      <ComponentsDemo />
      <AccordionDemo />
      <CarouselDemo />
      <FormDemo />
      <UtilitiesDemo />
      <CardsSection />
      <FooterComponent />
    </div>
  );
}

export default App;
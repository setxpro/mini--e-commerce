import React from 'react';
import FilterNav from './Components/FilterNav';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { Topo } from './Components/Topo';
import { CartProvider } from './Context/CartContext';
import { FilterProvider } from './Context/FilterContext';

function App() {
  return (
    <FilterProvider>
      <CartProvider>
        <Topo/>
        <FilterNav/>
        <Main/>
        <Footer/>
      </CartProvider>
    </FilterProvider>
  );
}

export default App;
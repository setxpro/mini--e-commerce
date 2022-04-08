import React from 'react';
import FilterNav from './Components/FilterNav';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { Topo } from './Components/Topo';
import { FilterProvider } from './Context/FilterContext';

function App() {
  return (
    <FilterProvider>
      <Topo/>
      <FilterNav/>
      <Main/>
      <Footer/>
    </FilterProvider>
  );
}

export default App;
import React, { useContext } from 'react';

import * as C from './styles';
import * as Icon from './styles';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import { Layout } from '../../Styles/Layout/styles';
import { FilterContext } from '../../Context/FilterContext';

function FilterNav() {

  const { setFilterProduct } = useContext(FilterContext);

  return (
      <Layout>
          <C.Container>
          <Link to="/"><img src={logo} alt="logo"/></Link>
          <input 
            type="search" 
            name='search' 
            placeholder='Search'
            onChange={e => setFilterProduct(e.target.value)}
            />
          <C.AreaRegister>
            <Link to="/contact">ENVIE  SUA ARTE</Link>
            <Link to="/register">REGISTER</Link>
            <Link to="/login">LOGIN</Link>
            <div className='store-length'>
                <Link to="/cart"><Icon.Cart/></Link>
                <span>0</span>
            </div>
          </C.AreaRegister>
      </C.Container>
      </Layout>
  );
}

export default FilterNav;
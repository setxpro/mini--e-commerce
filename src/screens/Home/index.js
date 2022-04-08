import React, { useContext } from 'react';
import CardItemHome from '../../Components/CardItemHome';

import * as C from './styles';
import { FilterContext } from '../../Context/FilterContext';

function Home() {

  const { product } = useContext(FilterContext);

  return (
    <>
      <h2>Produtos</h2>
      <C.Container>
        {product.map((item, index) => (
          <CardItemHome
            key={index}
            name={item.name}
            photo={item.photo}
            price={item.price}
            stars={item.stars}
            views={item.views}
          />
        ))}
      </C.Container>
    </>
  );
}

export default Home;
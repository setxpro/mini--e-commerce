import React, { useContext } from 'react';
import CardItemHome from '../../Components/CardItemHome';

import * as C from './styles';
import { FilterContext } from '../../Context/FilterContext';
import { Link } from 'react-router-dom';

function Home() {

  const { product } = useContext(FilterContext);

  return (
    <>
      <h2>Produtos</h2>
      <C.Container>
        {product.map((item, index) => (
         <Link to={`/info/${item.id_prod}`} key={index}>
            <CardItemHome
              name={item.name}
              photo={item.photo}
              price={item.price}
              stars={item.stars}
              views={item.views}
            />
         </Link>
        ))}
      </C.Container>
    </>
  );
}

export default Home;
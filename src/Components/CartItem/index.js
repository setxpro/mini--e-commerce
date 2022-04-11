import React, { useContext, useState } from 'react';
// import { CartContext } from '../../Context/CartContext';

import * as C from './styles';

function CartItem(props) {

  const [total, setTotal] = useState(0);
  const [priceActual, setPriceActual] = useState(props.price);
  const [totalQuantity, setTotalQuantity] = useState(props.quantity);
  const [countProduct, setCountProduct] = useState(1);

  const roundPrice = (n) => {
    return (Math.round(n * 100) / 100).toFixed(2);
  }


  const moreProduct = () => {
    if (countProduct >= props.quantity) {
      return setCountProduct(props.quantity);
    }
    setPriceActual(priceActual + props.price);
    setCountProduct(countProduct + 1);
  }

  const decreaseProduct = () => {
    if (countProduct <= 1) {
      return setCountProduct(1);
    }
    setPriceActual(priceActual - props.price);
    setCountProduct(countProduct - 1);
  }

  return (
    <C.Container>
      <C.Content>
        <C.ContentTitle>
          <img src={props.photo} alt='img'/>
          <h3>{props.title}</h3>
        </C.ContentTitle>
        <C.ContentQtdMoreTotal>
          <C.ContentQuantity>
            <button onClick={decreaseProduct} mode={countProduct}>-</button>
            <span>{countProduct}</span>
            <button onClick={moreProduct}>+</button>
          </C.ContentQuantity>
            <div>
              <span>{totalQuantity}</span> dispoiníveis
            </div>
        </C.ContentQtdMoreTotal>
        <C.Total>
          R$ <span>{roundPrice(priceActual)}</span>
        </C.Total>
      </C.Content>
      <hr/>
      <C.FinishPayment>

      </C.FinishPayment>
    </C.Container>
  );
}

export default CartItem;
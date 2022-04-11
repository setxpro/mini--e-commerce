import React from 'react';

import * as C from './styles';
import { Layout } from '../../Styles/Layout/styles';

import CartItem from '../../Components/CartItem';
// import { CartContext } from '../../Context/CartContext';
import { Cart } from '../../data/Carrinho';

function CartScreen() {
    
    // const { addproduct,  showProduct} = useContext(CartContext);

  return (
     <Layout>
          <C.Container>
            <h1>Carrinho de Compras</h1>
            <hr/>
           {Cart.map((item, indice) => (
             <CartItem
             key={indice}
             title={item.product}
             quantity={item.quantity}
             price={item.price}
             photo={item.photo}
             />
           ))}
          </C.Container>
     </Layout>
  );
}

export default CartScreen;
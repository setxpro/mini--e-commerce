import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Produtos } from "../data/Produtos";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(Produtos);
    const [showProduct, setShowProduct] = useState(true);

    const navigate = useNavigate();

    const addproduct = (product) => {
        
        // copy objectCart
        const objectCart = Object.assign({}, cart); 

        // Update to Cart
        let newProduct = true;
        objectCart.Produtos.forEach((prod, indece) => {
            if (prod.name === Produtos.name) {
                objectCart.Produtos[indece].quantity++;
                newProduct = false;
            }
        });
        // Add new product to cart
        if (newProduct) {
            objectCart.Produtos.push({
                name: product.name,
                price: product.price,
                quantity: product.quantity
            });
        }

        setCart(objectCart);
        navigate(`/cart/${product.id_prod}`);
        
    }

    return (
        <CartContext.Provider value={{cart, setCart, showProduct, setShowProduct, addproduct }}>
            {children}
        </CartContext.Provider>
    );
}
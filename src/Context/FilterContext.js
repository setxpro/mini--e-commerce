import { createContext, useState } from "react";
import { Produtos } from "../data/Produtos";

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {

    const [filterProduct, setFilterProduct] = useState([]);

    const product = Produtos.filter((item) => item.name.startsWith(filterProduct));

    return (
        <FilterContext.Provider value={{ product, setFilterProduct }}>
            {children}
        </FilterContext.Provider>
    );
}
import React from "react";
import { Product } from "./models/Product";

export interface Context {
    products?: Product[];
    changeGetProducts?: (b: boolean) => void;
}

const ProductsContext = React.createContext<Context>({products:[]});
export default ProductsContext;
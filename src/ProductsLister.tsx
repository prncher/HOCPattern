import React, { useState } from 'react';
import { Product } from './models/Product';
import ProductsContext from './ProductsContext';
import ProductsContextChanger, { ProductsContextChangerProps } from './ProductsContextChanger';
import ProductsShower from './ProductsShow';

type ProductsList = {
    products: Product[];
}

const objectsEqual = (o1: any, o2: any) =>
    Object.keys(o1).length === Object.keys(o2).length
    && Object.keys(o1).every(p => o1[p] === o2[p]);



const ProductsLister: React.FC<{}> = () => {
    const [productsInitializer, changeP] = useState<ProductsList>({ products: [] });
    const pcContextProps: ProductsContextChangerProps = {
        products: [],
        changeProducts: (products: Product[]) => changeP((p) => {
            if (!objectsEqual(p.products, products)) {
                const x = { ...productsInitializer, products };
                return x;
            } else
                return productsInitializer;
        })

    };

    const showContextChanger = (): React.ReactNode => {
        return (<ProductsContextChanger {...pcContextProps} />);
    }

    return (
        <ProductsContext.Provider value={productsInitializer}>
            {showContextChanger()}
            <ProductsShower />
        </ProductsContext.Provider>
    )
}

export default ProductsLister;
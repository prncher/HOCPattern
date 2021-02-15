import * as React from 'react';
import { ProductsProps, withProductsFC } from './withProductsFC'

const ProductsFC: React.FC<ProductsProps> = (props) => {
    const {products} = props;
    console.log(products);
    return (
        <React.Fragment>
            <h3>Products</h3>
            {products && products.map((p) => {
                return <details key={p.ID} open={p.ID === 0 ? true : false}>
                    <div>ID: <span>{p.ID}</span></div>
                    <div>Name: <span>{p.Name}</span></div>
                    <div>Description: <span>{p.Description}</span></div>
                    <div>Release Date: <span>{p.ReleaseDate}</span></div>
                    <div>Discontinued Date: <span>{p.DiscontinuedDate}</span></div>
                    <div>Rating: <span>{p.Rating}</span></div>
                    <div>Price: <span>{p.Price}</span></div>
                </details>
            })}
        </React.Fragment>);
}

export let ProductListFC = withProductsFC(ProductsFC);

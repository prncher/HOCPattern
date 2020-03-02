import * as React from 'react';
import { ProductsProps, withProducts } from './WithProducts'

class ProductListBase extends React.Component<ProductsProps>{
    render() {
        return (
            <React.Fragment>
                <h3>Products</h3>
                {this.props.products && this.props.products.map((p) => {
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
}

export let ProductList = withProducts(ProductListBase);

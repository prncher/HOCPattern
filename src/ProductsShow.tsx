import React, { useContext } from "react";
import ProductsContext from "./ProductsContext";

const ProductsShower = () => {
    const {products} = useContext(ProductsContext);
    return <>
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

    </>
}

export default ProductsShower;
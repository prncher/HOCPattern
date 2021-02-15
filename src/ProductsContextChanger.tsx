import { AxiosResponse } from 'axios';
import React, { useMemo } from 'react';
import { useState } from 'react';
import "./App.css";
import { Product } from './models/Product';
import { IErrorResponse, WebserviceClient } from './utils/WebserviceClient';
import { Button } from "@material-ui/core";

export interface ProductsContextChangerProps {
    products: Product[],
    changeProducts: (products: Product[]) => void
}

const fetch = (onRequestSuccess: (response: Product[]) => void) => {
    const api: string = 'http://localhost:4000/products';
    const beforeRequest = () => { console.log('beforeRequest') };
    WebserviceClient.doRequest(
        'get', api, {}, beforeRequest,
        (response: AxiosResponse) => {
            onRequestSuccess(response.data.value as Product[]);
        },
        (error: IErrorResponse) => {
            console.log(JSON.stringify(error));
        });

}

const ProductsContextChanger = (props: ProductsContextChangerProps) => {
    const [get, setGetProducts] = useState<boolean>(false);
    const {changeProducts} = props;

    const memoCallbackFn = () => {
        get && fetch((products: Product[]) => {
            setGetProducts(false);
            changeProducts(products);
        });
    }

    useMemo(memoCallbackFn, [get]);

    return (
        <Button variant="contained" color="primary" onClick={() => setGetProducts(true)}>Get Products</Button>
    );
}

export default ProductsContextChanger;
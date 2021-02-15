import * as React from 'react';
import { Product } from '../models/Product'
import { WebserviceClient, IErrorResponse } from '../utils/WebserviceClient';
import { AxiosResponse } from 'axios';

export interface ProductsProps {
    products?: Product[];
    fetchAgain?: boolean;
}

export let withProductsFC = (ContainerComp: React.FunctionComponent<ProductsProps>) => {
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

    const Fc: React.FC<ProductsProps> = (props: ProductsProps) => {
        const[products, setProducts] = React.useState<Product[]> ([]);

        React.useEffect(() => {
            fetch(p => setProducts(p))
        }, [props.fetchAgain]);

        return (
            <ContainerComp
                {...props}
                products={products}
            />
        );
    }
    return Fc;
}
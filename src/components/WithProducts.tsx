import * as React from 'react';
import { Product } from '../models/Product'
import { WebserviceClient, IErrorResponse } from '../utils/WebserviceClient';
import { AxiosResponse } from 'axios';

export interface ProductsProps {
    products?: Product[];
}

interface ProductsState {
    products: Product[];
}

export let withProducts = (ContainerComp: React.ComponentClass<ProductsProps>) => {
    return class extends React.Component<ProductsProps, ProductsState> {
        constructor(props:ProductsProps){
            super(props);
            this.state = {
                products:[]
            }
        }

        componentDidMount() {
            this.fetch((products: Product[]) => {
                this.setState({ products })
            });
        }
        render(): React.ReactNode {
             return (
                <ContainerComp
                    {...this.props}
                    products={this.state.products}
                />
            );
        }

        fetch = (onRequestSuccess: (response: Product[]) => void) => {
            const api: string = 'http://localhost:4000/products';
            const beforeRequest = () => { console.log('beforeRequest') };
            WebserviceClient.doRequest(
                'get', api, {}, beforeRequest,
                (response: AxiosResponse) => {
                    onRequestSuccess(response.data as Product[]);
                },
                (error: IErrorResponse) => {
                    console.log(JSON.stringify(error));
                });

        }
    }
};
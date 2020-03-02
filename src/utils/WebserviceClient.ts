import { default as axios, AxiosRequestConfig, Method, AxiosError } from 'axios';
import { AxiosResponse } from 'axios';

export interface IErrorResponse {
    code: number;
    status: string;
    message: string;
    detailedErrorMessages?: Map<string, string>;
}

class WebApi {
    doRequest(
        method: Method = 'post',
        api: string,
        data: any,
        beforeRequest: (request: AxiosRequestConfig) => void,
        onRequestSuccess: (response: AxiosResponse) => void,
        onRequestFailed: (error: IErrorResponse) => void): void {
        const config: AxiosRequestConfig = {
            method: method,
            url: api,
            headers: null,
            data: data,
        };

        if (beforeRequest) {
            beforeRequest(config);
        }
        axios(config).then((response: AxiosResponse) => {
            onRequestSuccess(response);
        }).catch((e: AxiosError) => {
            if (e && e.response) {
                onRequestFailed({
                    code: e.response.status,
                    status: e.response.statusText,
                    message: e.response.data && typeof (e.response.data) === 'string' ? e.response.data.substring(0, e.response.data.indexOf(" at")) : 'Unknown Error',
                    detailedErrorMessages: e.response.data
                });
            }
        });
    }
}

export let WebserviceClient = new WebApi();
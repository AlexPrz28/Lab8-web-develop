import axios from 'axios';

const ProductAPI = axios.create({
    baseURL: 'https://product-api-tec.herokuapp.com/ecom/api/v1/',
    responseType: 'json'
});

export default ProductAPI;
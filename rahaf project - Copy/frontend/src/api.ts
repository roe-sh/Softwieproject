import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', 
});

export const fetchProducts = () => API.get('/products');
export const addProduct = (product: { name: string; description: string; price: number }) =>
  API.post('/products', product);
export const deleteProduct = (id: number) => API.delete(`/products/${id}`);

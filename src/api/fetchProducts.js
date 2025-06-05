import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products?limit=6');
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return [];
  }
};

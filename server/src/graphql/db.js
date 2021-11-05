import axios from 'axios';
const BASE_URL = 'https://api.coincap.io/v2';

export const getCoins = async (limit = 100) => {
  const {
    data: { data: data },
  } = await axios(BASE_URL + `/assets?limit=${limit}`);
  return data;
};
export const getCoin = async (id) => {
  const {
    data: { data: data },
  } = await axios(BASE_URL + `/assets/${id}`);
  return data;
};

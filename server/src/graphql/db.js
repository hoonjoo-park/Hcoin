import axios from 'axios';
const BASE_URL = 'https://api.coinpaprika.com/v1';

export const getCoins = async () => {
  const { data: data } = await axios(BASE_URL + '/tickers');
  return data;
};
export const getCoin = async (id) => {
  const { data: data } = await axios(BASE_URL + `/coins/${id}`);
  return data;
};

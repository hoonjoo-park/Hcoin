import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_MARKETS } from '../queries';
import Loading from './Loading';

function Market() {
  const { loading, error, data } = useQuery(GET_MARKETS);
  if (loading) return <Loading />;
  if (error) return window.location.reload();
  console.log(data.markets);
  return (
    <MarketContainer>
      <MarketGridBox>
        {data.markets.map((market) => (
          <li key={market.exchangeId}>{market.name}</li>
        ))}
      </MarketGridBox>
    </MarketContainer>
  );
}

export default Market;

const MarketContainer = styled.div`
  width: 100vw;
  height: 100%;
`;
const MarketGridBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5%, 250px));
  justify-content: center;
  gap: 3rem;
  width: 70%;
  margin: 5% auto;
  padding: 5.5em 1.5em;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 55%);
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4151a6;
    box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 55%);
    color: #ffffff;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 900;
    height: 10rem;
  }
`;

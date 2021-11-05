import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_COINS } from '../queries';
import styled from 'styled-components';
import Loading from './Loading';

function Home() {
  const { loading, error, data, refetch } = useQuery(GET_COINS);
  if (loading) return <Loading />;
  if (error) return window.location.reload();
  return (
    <CoinUl>
      <ListHead>
        <CoinRank>순위</CoinRank>
        <CoinName>코인</CoinName>
        <CoinPrice>가격</CoinPrice>
      </ListHead>
      {data.coins.map((coin) => {
        return (
          <Link to={`coin/${coin.id}`} key={coin.id}>
            <CoinList>
              <CoinRank>{coin.rank}</CoinRank>
              <CoinName>
                {coin.name} ({coin.symbol})
              </CoinName>
              <CoinPrice>
                ${Number.parseFloat(coin.priceUsd).toFixed(2)}
              </CoinPrice>
            </CoinList>
          </Link>
        );
      })}
    </CoinUl>
  );
}

export default Home;

const CoinUl = styled.ul`
  max-width: 600px;
  width: 35vw;
  margin: 6% auto;
`;

const ListHead = styled.li`
  display: flex;
  align-items: center;
  height: 3.5rem;
  margin-bottom: 2rem;
  padding: 0 1.5em;
  border-radius: 10px;
  /* border: 1px solid dodgerblue; */
  background-color: #4151a6;
  box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 55%);
  & > * {
    color: #ffffff;
    text-align: center;
  }
`;

const CoinList = styled.li`
  /* border: 1px solid tomato; */
  border-radius: 10px;
  display: flex;
  align-items: center;
  height: 5rem;
  margin-bottom: 3%;
  padding: 0 1.5em;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 55%);
  & > * {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const CoinRank = styled.span`
  width: 10%;
`;
const CoinName = styled.h3`
  width: 100%;
`;
const CoinPrice = styled.span`
  width: 20%;
`;

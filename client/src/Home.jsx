import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_COINS } from './queries';
import styled from 'styled-components';

function Home() {
  // const [coins, setCoins] = useState([]);
  const GetCoins = () => {
    const { loading, error, data } = useQuery(GET_COINS);
    if (loading) return <h3>loading...</h3>;
    if (error) return <h3>Error</h3>;
    return (
      <ul>
        {data.coins.slice(0, 499).map((coin, i) => {
          return (
            <li key={i}>
              <Link to={`coin/${coin.id}`}>{coin.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <>
      <h2>Home</h2>
      <GetCoins />
    </>
  );
}

export default Home;

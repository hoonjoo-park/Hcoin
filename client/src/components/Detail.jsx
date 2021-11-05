import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COIN } from '../queries';

function Detail({ match }) {
  const {
    params: { id },
  } = match;
  console.log(id);
  const GetCoin = () => {
    const { loading, error, data } = useQuery(GET_COIN, {
      variables: { id },
    });
    if (loading) return <h3>loading...</h3>;
    if (error) return <h3>Error</h3>;
    console.log(data);
    return (
      <>
        <div>
          <h3>{data.coin.name}</h3>
          <span>{data.coin.symbol}</span>
          <div>{data.coin.rank}</div>
        </div>
      </>
    );
  };
  return (
    <>
      <div>Detail</div>
      <GetCoin />
    </>
  );
}

export default Detail;

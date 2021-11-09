import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_COIN } from '../queries';
import Loading from './Loading';

function Detail({ match }) {
  const {
    params: { id },
  } = match;
  console.log(id);
  const GetCoin = () => {
    const { loading, error, data } = useQuery(GET_COIN, {
      variables: { id },
    });
    if (loading) return <Loading />;
    if (error) return <h3>Error</h3>;
    return (
      <>
        <DetailContainer>
          <DetailBox>
            <h3>
              {data.coin.name} ({data.coin.symbol})
            </h3>
            <SubDetailBox>
              <div>
                <span>순위</span>
                <span>{data.coin.rank}</span>
              </div>
              <div>
                <span>가격</span>
                <span>${Number.parseFloat(data.coin.priceUsd).toFixed(1)}</span>
              </div>
              <div>
                <span>전일대비</span>
                <span>
                  {Number.parseFloat(data.coin.changePercent24Hr).toFixed(1)}%
                </span>
              </div>
              <div>
                <span>거래량(만)</span>
                <span>
                  {Number.parseFloat(data.coin.volumeUsd24Hr % 10000).toFixed(
                    0
                  )}
                </span>
              </div>
            </SubDetailBox>
          </DetailBox>
        </DetailContainer>
      </>
    );
  };
  return (
    <>
      <GetCoin />
    </>
  );
}

export default Detail;

const DetailContainer = styled.div`
  min-height: 89vh;
`;
const DetailBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 40vh;
  max-height: 800px;
  padding: 2em;
  background-color: rgba(65, 81, 166, 0.9);
  border-radius: 25px;
  box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 55%);
  & > * {
    font-size: 1.5rem;
    color: #ffffff;
  }
  & > h3 {
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
  }
`;

const SubDetailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
  height: 80%;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
    width: 20%;
    height: 60%;
    font-size: 1rem;
    background-color: rgba(249, 247, 247, 0.9);
    color: #373d4d;
    font-weight: 600;
    box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 55%);
  }
`;

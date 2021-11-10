import React from 'react';
import styled from 'styled-components';
function Loading() {
  return <LoadingText>Loading...</LoadingText>;
}

export default Loading;

const LoadingText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 71vh;
  width: 100vw;
  font-size: 2.5rem;
  font-weight: 900;
  color: #4151a6;
`;

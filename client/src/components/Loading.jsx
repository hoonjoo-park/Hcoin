import React from 'react';
import styled from 'styled-components';
function Loading() {
  return <LoadingText>Loading...</LoadingText>;
}

export default Loading;

const LoadingText = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  font-weight: 900;
  color: #4151a6;
`;

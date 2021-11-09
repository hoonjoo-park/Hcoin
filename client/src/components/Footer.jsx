import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterBox>
      <h3>Hcoin</h3>
      <p>Copyright&copy; 2021 Hcoin All rights reserved.</p>
    </FooterBox>
  );
}

export default Footer;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 200px;
  height: 18vh;
  background-color: #1e2959;
  & > * {
    font-size: 1.1rem;
    color: #ffffff;
  }
  & > h3 {
    margin-bottom: 1rem;
  }
`;

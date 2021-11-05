import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBitcoin } from 'react-icons/fa';

function Header() {
  return (
    <NavBox>
      <Link to="/">
        <LogoBox>
          <FaBitcoin style={{ width: '4rem', fontSize: '2.2rem' }} />
          <h1>Hcoin</h1>
        </LogoBox>
      </Link>
      <MenuBox>
        <Link to="/coin/:id">
          <li>Coins</li>
        </Link>
        <Link to="/market">
          <li>Markets</li>
        </Link>
      </MenuBox>
    </NavBox>
  );
}

export default Header;

const NavBox = styled.nav`
  display: flex;
  align-items: center;
  height: 11vh;
  background-color: #1e2959;
  & > * {
    color: #ffffff;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12.5vw;
  & > h1 {
    font-size: 2.2rem;
    font-weight: 900;
  }
`;

const MenuBox = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 12.5vw;
  width: 15rem;
  & li {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1em;
  }
  & li:not(:last-child) {
    margin-right: 4rem;
  }
`;

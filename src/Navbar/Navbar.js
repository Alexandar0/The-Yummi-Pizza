import React from 'react';
import styled from 'styled-components';
import { pizzaGreen } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaGreen};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: -1px 2px 4px #223300;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 15px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;

export function Navbar({login, loggedIn, logout}) {
    return (
      <NavbarStyled>
        <Logo>
            The Yummi Pizza <span role="img" aria-label="pizza slice"> 🍕</span>
        </Logo>
        <UserStatus>
          {loggedIn !== 'loading' ? (
            <>
              👨 {loggedIn ? "Logged in." : ""}
              {loggedIn ? (
                <LoginButton onClick={logout}> Log out </LoginButton>
              ) : (
                <LoginButton onClick={login}> Log in </LoginButton>
              )}
            </>
          ) : (
            "loading..."
          )}
        </UserStatus>
      </NavbarStyled>
    );
}
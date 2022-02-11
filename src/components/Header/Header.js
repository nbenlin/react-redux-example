import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth.slice";
import { Navbar, NavbarTitle, List, ListItem } from "./Header.styled";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Navbar>
      <NavbarTitle>proexe</NavbarTitle>
      <List>
        {!isAuth && <ListItem>Login</ListItem>}
        {isAuth && <ListItem onClick={logoutHandler}>Logout</ListItem>}

        <ListItem>Help</ListItem>
      </List>
    </Navbar>
  );
};

export default Header;

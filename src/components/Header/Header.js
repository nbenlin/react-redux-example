import React from "react";
import { Navbar, NavbarTitle, List, ListItem } from "./Header.styled";

const Header = () => {
  return (
    <Navbar>
      <NavbarTitle>proexe</NavbarTitle>
      <List>
        <ListItem>Login</ListItem>
        <ListItem>Logout</ListItem>
        <ListItem>Help</ListItem>
      </List>
    </Navbar>
  );
};

export default Header;

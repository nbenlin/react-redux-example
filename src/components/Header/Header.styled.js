import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 10vh;
`;

export const NavbarTitle = styled.h1`
  font-size: 3rem;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 1.6rem;
  margin: 0 1rem;
  cursor: pointer;
`;

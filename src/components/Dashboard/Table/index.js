import React from "react";
import { useSelector } from "react-redux";
import { TableStyled, THead, Tr, TBody, Td, Th } from "./Table.styled";
import Button from "../../UI/Button";

const Table = () => {
  const usersData = useSelector((state) => state.table.users);

  return (
    <TableStyled cellPadding={0} cellSpacing={0}>
      <THead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Username</Th>
          <Th>Email</Th>
          <Th>City</Th>
          <Th>Edit</Th>
          <Th>Delete</Th>
        </Tr>
      </THead>
      <TBody>
        {Object.values(usersData).map((user) => (
          <Tr>
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
            <Td>{user.username}</Td>
            <Td>{user.email}</Td>
            <Td>{user.address.city}</Td>
            <Td>
              <Button primary>edit</Button>
            </Td>
            <Td>
              <Button>delete</Button>
            </Td>
          </Tr>
        ))}
      </TBody>
    </TableStyled>
  );
};

export default Table;

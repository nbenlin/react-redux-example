import React from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import {
  DashboardContainer,
  DashboardHeader,
  DashboardHeaderTitle,
  DashboardHeaderButton,
  DashboardBody,
  Table,
  THead,
  Tr,
  Th,
  TBody,
  Td,
} from "./Dashboard.styled";

const Dashboard = ({ display }) => {
  const usersData = useSelector((state) => state.table.users);
  console.log(
    "From dashboard",
    Object.values(usersData).map((user) => user.id)
  );

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardHeaderTitle>User list</DashboardHeaderTitle>
        <DashboardHeaderButton>Add new</DashboardHeaderButton>
      </DashboardHeader>
      <DashboardBody>
        <Table cellPadding={0} cellSpacing={0}>
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
        </Table>
      </DashboardBody>
    </DashboardContainer>
  );
};

export default Dashboard;

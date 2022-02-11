import React from "react";
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
  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardHeaderTitle>User list</DashboardHeaderTitle>
        <DashboardHeaderButton>Add new</DashboardHeaderButton>
      </DashboardHeader>
      <DashboardBody>
        {display && (
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
              <Tr>
                <Td>22</Td>
                <Td>Nihat</Td>
                <Td>Benli</Td>
                <Td>nihatbenli.nb@gmail.com</Td>
                <Td>Poznan</Td>
                <Td>
                  <Button primary>edit</Button>
                </Td>
                <Td>
                  <Button>delete</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>52</Td>
                <Td>Adam</Td>
                <Td>Nowak</Td>
                <Td>adamnowak@test.com</Td>
                <Td>Wroclaw</Td>
                <Td>
                  <Button primary>edit</Button>
                </Td>
                <Td>
                  <Button>delete</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>65</Td>
                <Td>Jan</Td>
                <Td>Kowalski</Td>
                <Td>kowalski@test.com</Td>
                <Td>Warszawa</Td>
                <Td>
                  <Button primary>edit</Button>
                </Td>
                <Td>
                  <Button>delete</Button>
                </Td>
              </Tr>
            </TBody>
          </Table>
        )}
      </DashboardBody>
    </DashboardContainer>
  );
};

export default Dashboard;

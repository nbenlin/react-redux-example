import React, { useState } from "react";
import {
  DashboardContainer,
  DashboardHeader,
  DashboardHeaderTitle,
  DashboardHeaderButton,
  DashboardBody,
} from "./Dashboard.styled";
import Form from "./Form";
import Table from "./Table";

const Dashboard = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const toggleFormHandler = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <DashboardContainer>
      {toggleForm ? (
        <Form toggleFormHandler={toggleFormHandler} />
      ) : (
        <>
          <DashboardHeader>
            <DashboardHeaderTitle>User list</DashboardHeaderTitle>
            <DashboardHeaderButton onClick={toggleFormHandler}>
              Add new
            </DashboardHeaderButton>
          </DashboardHeader>
          <DashboardBody>
            <Table />
          </DashboardBody>
        </>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;

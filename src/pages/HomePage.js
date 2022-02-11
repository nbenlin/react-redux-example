import React from "react";
import { useSelector } from "react-redux";
import AuthenticationForm from "../components/Auth/AuthenticationForm";
import Dashboard from "../components/Dashboard/Dashboard";
import { HomepageWrapper } from "./HomePage.styled";

const HomePage = ({ display }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <HomepageWrapper>
      {!isAuth && <AuthenticationForm />}
      {isAuth && <Dashboard display={display} />}
    </HomepageWrapper>
  );
};

export default HomePage;

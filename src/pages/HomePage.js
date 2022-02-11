import React from "react";
import AuthenticationForm from "../components/Auth/AuthenticationForm";
import { HomepageWrapper } from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomepageWrapper>
      <AuthenticationForm />
    </HomepageWrapper>
  );
};

export default HomePage;

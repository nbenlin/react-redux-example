import React from "react";
import { ButtonWrap } from "./Button.styled";

const Button = ({ children, primary }) => {
  return <ButtonWrap primary={primary}>{children}</ButtonWrap>;
};

export default Button;

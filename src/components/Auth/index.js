import React from "react";
import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import {
  Form,
  InputGroup,
  Label,
  Input,
  Button,
} from "./AuthenticationForm.styled";
import { authActions } from "../../store/auth.slice";

const AuthenticationForm = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <Card>
      <Form onSubmit={loginHandler}>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </InputGroup>
        <Button>Submit</Button>
      </Form>
    </Card>
  );
};

export default AuthenticationForm;

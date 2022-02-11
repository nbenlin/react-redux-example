import React from "react";
import Card from "../UI/Card/Card";
import {
  Form,
  InputGroup,
  Label,
  Input,
  Button,
} from "./AuthenticationForm.styled";

const AuthenticationForm = () => {
  return (
    <Card>
      <Form>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input id="password" />
        </InputGroup>
        <Button>Submit</Button>
      </Form>
    </Card>
  );
};

export default AuthenticationForm;

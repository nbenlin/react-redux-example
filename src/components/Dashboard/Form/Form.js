import React from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import {
  FormWrap,
  InputGroup,
  Label,
  Input,
  FormStyled,
  FormButton,
  ButtonGroup,
} from "./Form.styled";

const Form = () => {
  return (
    <Card>
      <FormWrap>
        <FormStyled>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input id="nameemail" type="text" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="city">City</Label>
            <Input id="city" type="text" />
          </InputGroup>
          <ButtonGroup>
            <FormButton apply>Apply Changes</FormButton>
            <FormButton>Cancel</FormButton>
          </ButtonGroup>
        </FormStyled>
      </FormWrap>
    </Card>
  );
};

export default Form;

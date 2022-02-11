import React from "react";
import { useDispatch } from "react-redux";
import { tableActions } from "../../../store/table.slice";
import Card from "../../UI/Card";
import {
  FormWrap,
  InputGroup,
  Label,
  Input,
  FormStyled,
  FormButton,
  ButtonGroup,
} from "./Form.styled";

const Form = ({ toggleFormHandler }) => {
  const dispatch = useDispatch();

  const addUserHandler = (event) => {
    event.preventDefault();
    dispatch(
      tableActions.addUserToTable({
        id: 20,
        name: "Tuncer",
        username: "karsiki",
        email: "test@test.com",
        city: "Poznan",
      })
    );
  };
  return (
    <Card>
      <FormWrap>
        <FormStyled onSubmit={addUserHandler}>
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
            <FormButton type="submit" onClick={toggleFormHandler} apply>
              Apply Changes
            </FormButton>
            <FormButton onClick={toggleFormHandler}>Cancel</FormButton>
          </ButtonGroup>
        </FormStyled>
      </FormWrap>
    </Card>
  );
};

export default Form;

import styled from "styled-components";

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 37rem;
  height: 40vh;
`;

export const FormStyled = styled.form``;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.7rem 5rem;
`;
export const Label = styled.label`
  font-size: 1.6rem;
  margin: 1rem;
`;
export const Input = styled.input`
  padding: 0.7rem 2rem;

  &:focus {
    outline: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FormButton = styled.button`
  background-color: #2196f3;
  background-color: ${({ apply }) => (apply ? "#2196f3" : "#d50000")};
  border: none;
  border-radius: 7px;
  padding: 1rem 2rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  bottom: 1rem;
  left: 30%;
  cursor: pointer;
  margin: 2rem 0rem;

  &:hover {
    transform: scale(1.015);
  }
`;

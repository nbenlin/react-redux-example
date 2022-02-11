import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 28vw;
  padding: 0 3rem;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.4rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
`;

export const Input = styled.input`
  width: 30rem;
  padding: 1rem;
  font-size: 1.6rem;
  border: 1px solid #424242;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  margin-top: 2rem;
  width: 10rem;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  color: #37474f;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

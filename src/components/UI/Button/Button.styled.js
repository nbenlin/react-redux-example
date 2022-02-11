import styled from "styled-components";

export const ButtonWrap = styled.button`
  padding: 1rem 3rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 7px;
  background-color: ${({ primary }) => (primary ? "#ff9800" : "#f44336")};
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

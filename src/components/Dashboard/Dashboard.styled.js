import styled from "styled-components";

export const DashboardContainer = styled.section`
  position: absolute;
  top: 2rem;
  box-shadow: 0px 0px 11px 0px rgba(66, 68, 90, 1);
  border-radius: 1.2rem;
  min-width: 80%;
  height: auto;
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  border-bottom: 2px solid #bdbdbd;
`;
export const DashboardHeaderTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;
export const DashboardHeaderButton = styled.button`
  background-color: #1769aa;
  border: none;
  border-radius: 7px;
  padding: 1rem 4rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
export const DashboardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;

  margin: 2rem;
`;

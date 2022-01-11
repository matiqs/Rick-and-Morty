import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

export const StyledDashboardContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  @media only screen and ${breakpoints.device.sm} {
    margin: 5px;
  }
`;

export const StyledDashboardHeader = styled.div`
  color: #333;
  font-size: 32px;
  border-bottom: 1px solid #009f9a;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  p {
    letter-spacing: 1px;
  }
  @media only screen and ${breakpoints.device.sm} {
    padding: 2vw;
    font-size: 5.5vw;
    justify-content: center;
    button {
      display: none;
    }
  }
`;

export const StyledDashboardBody = styled.div``;

import styled from "styled-components";
import { StyledCardButton } from "./Styled_globals";

export const StyledDashboardContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin: 10px;
  padding: 14px;
`;

export const StyledDashboardHeader = styled.div`
  color: #333;
  font-size: 32px;
  border-bottom: 1px solid #009f9a;
  padding: 0 20px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;

export const StyledDashboardBody = styled.div`
  padding: 5px 20px;
`;

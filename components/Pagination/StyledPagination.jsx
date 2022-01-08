import styled from "styled-components";
import { StyledCardButton } from "../../styles/Styled_globals";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;
export const PaginationBtn = styled(StyledCardButton)`
  background-color: #121919;
  color: #00dcbe;
  width: 160px;
  font-size: 20px;
  margin: 0 10px;
  &:hover {
    background-color: #233030;
    transition: 0.5s;
  }
`;

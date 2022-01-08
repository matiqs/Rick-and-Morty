import styled from "styled-components";
import { StyledCardButton } from "../../styles/Styled_globals";

export const Card = styled.div`
  background-color: #eee;
  margin: 5px 0;
  padding: 5px 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.p {
    font-size: 26px;
  }
`;

export const DeleteButton = styled(StyledCardButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #ec3636;
  box-shadow: 1px 1px 4px #666;
  &:hover {
    background-color: #cf3d3d;
  }
`;

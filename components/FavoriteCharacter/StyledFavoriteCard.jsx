import styled from "styled-components";
import { StyledCardButton } from "../../styles/Styled_globals";

export const Card = styled.div`
  background-color: #eee;
  margin: 5px 0;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    width: 200px;
    font-size: 26px;
  }
`;

export const DeleteButton = styled(StyledCardButton)`
  color: #fff;
  background-color: #ec3636;
  &:hover {
    background-color: #cf3d3d;
  }
  svg {
    padding-top: 4px;
  }
`;

import styled from "styled-components";
import { StyledCardButton } from "../../styles/Styled_globals";

export const Card = styled.div`
  padding: 5px 0;
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
`;

import styled from "styled-components";
import { StyledDetailsElement, StyledCard } from "../../styles/Styled_globals";

export const Card = styled(StyledCard)`
  width: 280px;
  height: 380px;
  justify-content: space-evenly;
  h2 {
    margin: 4px 0;
    font-size: 18px;
    text-align: center;
  }
`;

export const FavContainer = styled.div`
  display: Flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    color: #888;
    font-size: 28px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  svg:hover {
    transition: 0.5s;
  }
`;

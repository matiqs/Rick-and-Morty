import styled from "styled-components";
import { StyledDetailsElement, StyledCard } from "../../styles/Styled_globals";

export const Card = styled(StyledCard)`
  width: 280px;
  height: 380px;
  justify-content: space-evenly;
  h2 {
    margin: 5px 0;
    font-size: 20px;
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

export const DetailsCharacter = styled(StyledDetailsElement)`
  width: 50%;
`;

export const DetailsCharacterHeader = styled.div`
  border-bottom: 1px solid #00dcbe;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    padding: 5px 0;
    text-align: center;
  }
  svg {
    font-size: 38px;
    cursor: pointer;
  }
  svg:hover {
    transition: 0.5s;
  }
`;

export const DetailsItem = styled.div`
  text-align: center;
  letter-spacing: 2px;
  padding: 14px 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
  }
  svg {
    padding-top: 5px;
    font-size: 28px;
  }
`;

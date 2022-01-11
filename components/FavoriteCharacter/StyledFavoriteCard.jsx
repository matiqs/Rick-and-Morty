import styled from "styled-components";
import { StyledCardButton } from "../../styles/Styled_globals";
import breakpoints from "../../styles/breakpoints";

export const Card = styled.div`
  background-color: #eee;
  margin: 5px 0;
  padding: 5px 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  @media only screen and ${breakpoints.device.md} {
    font-size: 20px;
  }
  @media only screen and ${breakpoints.device.sm} {
    font-size: 3.5vw;
    button {
      margin: 0 5px;
      font-size: 5vw;
      p {
        display: none;
      }
    }
  }
`;

export const CardText = styled.div`
  width: 25%;
`;

export const CardImage = styled.div`
  position: relative;
  height: 120px;
  width: 120px;
  @media only screen and ${breakpoints.device.sm} {
    height: 20vw;
    width: 20vw;
  }
`;

export const DetailSButton = styled(StyledCardButton)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteButton = styled(StyledCardButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #ec3636;
  &:hover {
    background-color: #cf3d3d;
  }
`;

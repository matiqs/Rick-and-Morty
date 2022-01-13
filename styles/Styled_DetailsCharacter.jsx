import styled from "styled-components";
import breakpoints from "./breakpoints";

export const DetailsCharacterImage = styled.div`
  margin: 10px 5px;
  position: relative;
  width: 400px;
  height: 400px;
  @media only screen and ${breakpoints.device.sm} {
    width: 90vw;
    height: 42vh;
  }
`;

export const DetailsCharacterHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    margin-right: 10px;
    font-size: 40px;
    padding: 5px 0;
    text-align: center;
  }
  svg {
    margin-top: 5px;
    font-size: 36px;
    cursor: pointer;
  }
  svg:hover {
    transition: 0.5s;
  }
  @media only screen and ${breakpoints.device.xs} {
    h1 {
      font-size: 11vw;
    }
    svg {
      font-size: 10vw;
    }
  }
`;

export const DetailsCharacterItem = styled.div`
  height: 50px;
  margin: 5px 0;
  margin-left: 5px;
  padding: 10px 0;
  letter-spacing: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    font-size: 18px;
  }
  svg {
    font-size: 26px;
    margin-bottom: 6px;
  }
  @media only screen and ${breakpoints.device.xs} {
    p {
      font-size: 5vw;
    }
  }
`;

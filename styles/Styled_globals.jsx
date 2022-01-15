import styled from "styled-components";
import breakpoints from "./breakpoints";

export const StyledContainer = styled.div`
  height: calc(100vh - 190px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  background: rgb(221, 221, 221);
  background: linear-gradient(
    90deg,
    rgba(221, 221, 221, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(221, 221, 221, 1) 100%
  );
  box-shadow: 0 0 8px #000;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  h1,
  h2 {
    text-align: center;
    font-family: "Kalam", cursive;
  }
`;

export const StyledCardButton = styled.button`
  display: inline-block;
  margin: 4px 2px;
  background-color: #00dcbe;
  color: #121919;
  padding: 6px;
  font-size: 20px;
  font-family: "Caveat", cursive;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 4px #666;
  cursor: pointer;
  &:hover {
    background-color: #009f9a;
    transition: 0.5s;
  }
`;

export const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledDetailsSection = styled.div`
  background-color: #fff;
  box-shadow: 0 0 8px #000;
  border-radius: 5px;
  margin-top: 10px;
  padding: 20px 0;
  width: 980px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  h1,
  h2 {
    letter-spacing: 2px;
    font-family: "Kalam", cursive;
  }
  @media only screen and ${breakpoints.device.lg} {
    padding: 5px;
    width: 98vw;
  }
  @media only screen and ${breakpoints.device.md} {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and ${breakpoints.device.sm} {
    margin: 1px 0;
    width: 100vw;
    margin-top: 0;
    box-shadow: none;
    border-radius: 0;
    font-size: 4vw;
  }
`;

export const StyledDetailsElement = styled.div`
  padding: 20px 0;
  text-align: center;
  h2 {
    font-size: 50px;
  }
  @media only screen and ${breakpoints.device.md} {
    h2 {
      font-size: 8vw;
    }
  }
`;

export const StyledItemsContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    font-weight: 500;
    width: 100%;
    padding-bottom: 20px;
  }
  @media only screen and ${breakpoints.device.md} {
    h2 {
      font-size: 6vw;
    }
  }
`;

export const StyledItem = styled.div`
  background: #eee;
  text-align: left;
  width: 80%;
  letter-spacing: 2px;
  padding: 10px 2px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    border-radius: 5px;
    box-shadow: 0 0 8px #000;
  }
  @media only screen and ${breakpoints.device.sm} {
    padding: 8px 0;
    font-size: 3vw;
  }
`;

export const StyledItemBtn = styled(StyledCardButton)`
  margin: 0 10px;
  display: flex;
  &:hover {
    background-color: #009f9a;
    transition: 0.5s;
  }
  @media only screen and ${breakpoints.device.md} {
    p {
      display: none;
    }
  }
`;

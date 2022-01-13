import styled from "styled-components";
import breakpoints from "./breakpoints";

export const StyledCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0 8px #000;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledCardButton = styled.button`
  display: inline-block;
  margin: 4px 2px;
  background-color: #00dcbe;
  color: #121919;
  padding: 6px;
  font-size: 18px;
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
  text-align: left;
  width: 80%;
  letter-spacing: 2px;
  padding: 10px 0;
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

export const StyledItemBtn = styled.button`
  background-color: #00dcbe;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #666;
  margin: 0 10px;
  padding: 10px;
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

import styled from "styled-components";

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
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledDetailsSection = styled.div`
  background-color: #fff;
  box-shadow: 0 0 8px #000;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
  img {
    object-fit: cover;
  }
`;

export const StyledDetailsElement = styled.div`
  text-align: center;
  h1 {
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
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #00dcbe;
  }
`;

export const StyledItem = styled.div`
  width: 70%;
  letter-spacing: 2px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin: 0 10px;
    cursor: pointer;
    padding: 10px;
    background-color: #00dcbe;
    border: none;
    border-radius: 5px;
  }
  button:hover {
    background-color: #009f9a;
    transition: 0.5s;
  }
  img {
    border-radius: 5px;
    box-shadow: 0 0 8px #000;
  }
`;

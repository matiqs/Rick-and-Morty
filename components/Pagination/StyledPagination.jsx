import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;
export const PaginationBtn = styled.button`
  cursor: pointer;
  background-color: #121919;
  border: none;
  border-radius: 5px;
  color: #00dcbe;
  padding: 8px;
  width: 160px;
  font-size: 20px;
  margin: 0 10px;
  &:hover {
    background-color: #233030;
    transition: 0.5s;
  }
`;

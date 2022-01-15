import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const SearchedContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  @media only screen and ${breakpoints.device.md} {
    justify-content: center;
  }
`;

export const Search = styled.div`
  box-shadow: 0 0 8px #000;
  border-radius: 5px;
  display: flex;
`;

export const SearchInput = styled.input`
  padding: 12px;
  border: none;
  border-radius: 5px 0 0 5px;
  width: 250px;
  &:focus {
    outline: none;
    &::placeholder {
      font-size: 14px;
      color: #fff;
      transition: 1s;
    }
  }
  &::placeholder {
    color: #00dcbe;
    font-size: 14px;
  }
`;

export const SearchIcon = styled.div`
  background: #121919;
  border-radius: 0 5px 5px 0;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #00dcbe;
    font-size: 24px;
    padding: 2px;
  }
`;

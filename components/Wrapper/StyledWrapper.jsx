import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  background: rgb(0, 64, 84);
  background: linear-gradient(
    90deg,
    rgba(0, 64, 84, 1) 0%,
    rgba(0, 105, 138, 1) 50%,
    rgba(0, 64, 84, 1) 100%
  );
  font-size: 28px;
  font-family: "Creepster", cursive;
  letter-spacing: 2px;
  padding: 20px 0;
  text-align: center;
  -webkit-text-stroke: 0.5px #bce056;
  color: #0cb0c4;
  text-shadow: 0 0 10px #000;
  box-shadow: 0 0 8px #000;

  @media only screen and ${breakpoints.device.xs} {
    font-size: 7.4vw;
  }
`;

import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  background-color: #00dcbe;
  color: #fff;
  font-size: 28px;
  border-bottom: 1px solid #121919;
  padding: 20px 0;
  text-align: center;
  @media only screen and ${breakpoints.device.xs} {
    font-size: 7.4vw;
  }
`;

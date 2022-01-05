import styled from "styled-components";
import errorImage from "../../public/assets/images/error-page-img.png";
import { StyledCardButton } from "../../styles/Styled_globals";

export const ErrorContainer = styled.div`
  background-image: url(${errorImage.src});
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    p {
      color: #00dcbe;
      letter-spacing: 7px;
      font-size: 38px;
      font-weight: 600;
      margin: 0 8px;
    }
    svg {
      font-size: 38px;
      color: #00dcbe;
    }
  }
`;

export const ErrorButton = styled(StyledCardButton)`
  font-size: 20px;
  margin-top: 40px;
  width: 120px;
  svg {
    margin: 5px 10px 0 0;
  }
`;

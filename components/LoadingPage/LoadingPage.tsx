import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import breakpoints from "../../styles/breakpoints";
import { LoadingContainer } from "./StyledLoadingPage";

const LoadingPage = ({ loading }) => {
  const override = css`
    border-right: 0.5vw solid #00dcbe;
    border-left: 0.5vw solid #00dcbe;
    border-top: 0.5vw solid #00dcbe;
    width: 180px;
    height: 180px;
    @media only screen and ${breakpoints.device.lg} {
      width: 18vw;
      height: 18vw;
    }
  `;

  return (
    <LoadingContainer>
      <ClipLoader loading={true} css={override}>
        {" "}
      </ClipLoader>
      <h2>CARGANDO...</h2>
    </LoadingContainer>
  );
};

export default LoadingPage;

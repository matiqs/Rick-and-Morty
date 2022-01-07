import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { LoadingContainer } from "./StyledLoadingPage";

const LoadingPage = ({ loading }) => {
  const override = css`
    border-right: 5px solid #00dcbe;
    border-left: 5px solid #00dcbe;
    border-top: 5px solid #00dcbe;
    width: 180px;
    height: 180px;
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

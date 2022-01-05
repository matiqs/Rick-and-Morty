import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";
import { LoadingContainer } from "./StyledLoadingPage";

const override = css`
  margin-top: 30px;
`;

const LoadingPage = ({ loading }) => {
  return (
    <LoadingContainer>
      <h2>CARGANDO</h2>
      <PulseLoader loading={loading} color="#00dcbe" size={30} css={override}>
        {" "}
      </PulseLoader>
    </LoadingContainer>
  );
};

export default LoadingPage;

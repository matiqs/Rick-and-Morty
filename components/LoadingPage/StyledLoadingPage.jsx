import styled from "styled-components";
import loadingImage from "../../public/assets/images/loading-page-img.jpg";

export const LoadingContainer = styled.div`
  background-image: url(${loadingImage.src});
  background-position: center;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: #fff;
    text-shadow: 1px 1px 5px #000;
    font-size: 80px;
  }
`;

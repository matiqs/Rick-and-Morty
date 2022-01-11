import styled from "styled-components";
import loadingImage from "../../public/assets/images/loading-page-img.jpg";
import breakpoints from "../../styles/breakpoints";

export const LoadingContainer = styled.div`
  background-image: url(${loadingImage.src});
  background-position: center;
  background-size:cover;
  background-repeat:no-repeat;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
      color: #fff;
      text-shadow: 1px 1px 5px #000;
      font-size: 80px;
    }
  @media only screen and ${breakpoints.device.lg} {
      h2{
        font-size:8vw;
      }
  }  
}
`;

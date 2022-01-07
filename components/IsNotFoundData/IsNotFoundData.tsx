import { IsNotFoundContainer } from "./StyledIsNotFoundData";
import IsNotFoundImage from "../../public/assets/images/isNotFoundData.png";
import Image from "next/image";

const IsNotFoundData = ({ searchTerm }) => {
  return (
    <IsNotFoundContainer>
      <Image src={IsNotFoundImage.src} width={300} height={220} alt="" />
      <div>
        <p>No results for your search: </p>
        <em>{`(${searchTerm})`}</em>
      </div>
    </IsNotFoundContainer>
  );
};

export default IsNotFoundData;

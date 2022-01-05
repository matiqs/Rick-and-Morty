import { ErrorButton, ErrorContainer } from "./StyledErrorPage";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <div>
        <BiIcons.BiError />
        <p>PAGE NOT FOUND</p>
      </div>
      <Link href={"/"} passHref>
        <ErrorButton>
          <AiIcons.AiOutlineRollback />
          Back
        </ErrorButton>
      </Link>
    </ErrorContainer>
  );
};

export default ErrorPage;

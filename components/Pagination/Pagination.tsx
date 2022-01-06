import { PaginationBtn, PaginationContainer } from "./StyledPagination";

const Pagination = ({ nextPage, returnPage }: any) => {
  return (
    <PaginationContainer>
      <PaginationBtn onClick={returnPage}>Back</PaginationBtn>
      <PaginationBtn onClick={nextPage}>Next</PaginationBtn>
    </PaginationContainer>
  );
};

export default Pagination;

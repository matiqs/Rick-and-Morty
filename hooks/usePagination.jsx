const { useState, useEffect } = require("react");

export const usePagination = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const returnPage = () => {
    if (page != 1) setPage(page - 1);
  };

  return {
    page,
    setPage,
    nextPage,
    returnPage,
  };
};

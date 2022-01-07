const { useState } = require("react");

export const useSearched = (setPage) => {
  const [filter, setFilter] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 2) {
      setFilter(e.target.value);
      setPage(1);
    }

    if (e.target.value.length < 2) {
      setFilter("");
    }
  };

  return {
    filter,
    inputValue,
    handleChange,
  };
};

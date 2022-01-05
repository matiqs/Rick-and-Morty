import * as FaIcons from "react-icons/fa";
import { SearchedContainer, SearchIcon, SearchInput } from "./StyledSearched";

const Searched = ({ value, searchType, handleChange, handleSubmit }) => {
  return (
    <SearchedContainer>
      <SearchInput
        type="text"
        value={value}
        placeholder={`Search by ${searchType} for name`}
        onChange={handleChange}
        ref={(input) => {
          input && input.focus();
        }}
      />
      <SearchIcon onClick={handleSubmit}>
        <FaIcons.FaSearch />
      </SearchIcon>
    </SearchedContainer>
  );
};
export default Searched;

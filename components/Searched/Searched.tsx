import * as FaIcons from "react-icons/fa";
import {
  Search,
  SearchedContainer,
  SearchIcon,
  SearchInput,
} from "./StyledSearched";

const Searched = ({ value, searchType, handleChange, handleSubmit }: any) => {
  return (
    <SearchedContainer>
      <Search>
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
      </Search>
    </SearchedContainer>
  );
};
export default Searched;

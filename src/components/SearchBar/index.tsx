import styled from "styled-components";

import SearchIcon from "../../img/searchIcon";

const SearchWrapper = styled.form`
	width: 26.875rem;
	display: flex;
	flex-direction: row;
	background: #f9f9f9;
	border: 1px solid #e6e6e6;
	box-sizing: border-box;
`;

const SearchInput = styled.input`
	width: 26.875rem;
	border-color: transparent;
	height: 2.75rem;
  text-align: center;
  box-shadow: rgba(64,64,64,0.25);

  &:focus {
    outline: none;
    border-color:transparent;
  }
`;


const SearchBar = () => {
	return <SearchWrapper>
    <SearchInput />
    <SearchIcon />
  </SearchWrapper>;
};

export default SearchBar;

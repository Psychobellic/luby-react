import styled from "styled-components";

import SearchIcon from "../../img/searchIcon";

const SearchWrapper = styled.form`
	width: 26.875rem;
	display: flex;
	flex-direction: row;
	background: #f9f9f9;
	border: 1px solid #e6e6e6;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-around;
	text-align: center;
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

const Button = styled.button`
	background-color: transparent;
	border: 0;
	outline: 0;
	&:hover {
		cursor: pointer;
	}
`;


const SearchBar = () => {
	return (
		<SearchWrapper>
			<SearchInput />
			<Button type='submit'>
				<SearchIcon />
			</Button>
		</SearchWrapper>
	);
};

export default SearchBar;

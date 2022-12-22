import React from "react";
import styled from "styled-components";
import Filter from "./Filter/Filter";
import Search from "./Search";
const SearchAndFilterPane = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
`;
function SearchAndFilter(props) {
	return (
		<SearchAndFilterPane>
			<Search />
			<Filter />
		</SearchAndFilterPane>
	);
}

export default SearchAndFilter;

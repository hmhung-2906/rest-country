import React from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import filterSlice from "./Filter/filterSlice";

const SearchPane = styled.div`
	max-width: 320px;
	width: 100%;
	margin-top: 20px;
	h3 {
		font-size: 18px;
		font-weight: 600;
		text-shadow: var(--TextShadow);
	}
`;
const SearchElement = styled.div`
	margin-top: 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 34px;
	background-color: #fff;
	box-shadow: var(--BoxShadow);
	border-radius: 4px;
	overflow: hidden;
	.icon {
		height: 100%;
		width: 100%;
		padding: 2px;
		text-align: center;
		background-color: #aaa !important;
		box-shadow: none !important;
		opacity: 75%;
		transition: opacity 0.2 ease;
		:hover {
			opacity: 1;
			cursor: pointer;
		}
	}
	input {
		border: 0;
		outline: none;
		width: 100%;
		font-size: 18px;
		font-weight: 500;
		margin: 0 8px;
	}
`;
function Search(props) {
	const [searchText, setSearchText] = useState("");
	const dispatch = useDispatch();
	const handleSearchTextChange = (e) => {
		setSearchText(e.target.value);
		dispatch(filterSlice.actions.searchFilterChange(e.target.value));
	};
	return (
		<SearchPane>
			<h3>Search Country:</h3>
			<SearchElement>
				<input
					type="text"
					value={searchText}
					placeholder="Input the and enter to search. . ."
					onChange={handleSearchTextChange}
				/>
				<div style={{ width: 40, height: 40 }}>
					<MdSearch className="icon"></MdSearch>
				</div>
			</SearchElement>
		</SearchPane>
	);
}

export default Search;

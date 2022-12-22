import React from "react";
import styled from "styled-components";
import Country from "./Country";
import {
	countriesRemainingSelector,
	currentPageFilterSelector,
} from "../../../redux/selector";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCountries } from "./countriesSlice";
import filterSlice from "../SearchAndFilter/Filter/filterSlice";
import Pagination from "../../Pagination/Pagination";
const CountriesContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 12px;
	padding: 4px 1px;
	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: repeat(1, auto);
	}
`;

function Countries(props) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCountries());
	}, []);
	const countriesList = useSelector(countriesRemainingSelector);
	const currentPage = useSelector(currentPageFilterSelector);
	// const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(20);

	//  Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;

	const currentCountriesList = countriesList.slice(
		indexOfFirstPost,
		indexOfLastPost,
	);

	// Change page
	const paginate = (pageNumber) =>
		dispatch(filterSlice.actions.currentPageFilterChange(pageNumber));

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(countriesList.length / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<CountriesContainer>
				{currentCountriesList.map((country) => (
					<Country
						capital={country.capital}
						flag={country.flag}
						population={country.population}
						name={country.name}
						region={country.region}
					/>
				))}

				{/* <Country /> */}
			</CountriesContainer>
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={countriesList.length}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</div>
	);
}

export default Countries;

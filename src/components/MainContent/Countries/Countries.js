import React from "react";
import styled from "styled-components";
import Country from "./Country";
import { countriesRemainingSelector } from "../../../redux/selector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCountries } from "./countriesSlice";
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
	return (
		<CountriesContainer>
			{countriesList.map((country) => (
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
	);
}

export default Countries;

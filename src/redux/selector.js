import { createSelector } from "@reduxjs/toolkit";
export const countriesSelector = (state) => {
	return state.countriesList.countries;
};
export const statusSelector = (state) => {
	return state.countriesList.status;
};
export const countrySelector = (state) => {
	return state.countriesList.country;
};
export const searchTextSelector = (state) => {
	return state.filters.search;
};
export const regionFilterSelector = (state) => {
	return state.filters.region;
};
export const countriesRemainingSelector = createSelector(
	countriesSelector,
	searchTextSelector,
	regionFilterSelector,
	(countriesList, searchText, region) => {
		return countriesList.filter((country) => {
			if (region === "All") {
				return country.name.toLowerCase().includes(searchText);
			} else {
				return (
					country.name.toLowerCase().includes(searchText) &&
					country.region === region
				);
			}
		});
		// return countriesList;
	},
);

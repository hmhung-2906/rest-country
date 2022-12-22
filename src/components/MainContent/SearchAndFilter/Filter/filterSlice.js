import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
	name: "filters",
	initialState: {
		search: "",
		region: "All",
		currentPage: 1,
	},
	reducers: {
		searchFilterChange: (state, action) => {
			state.search = action.payload;
			state.currentPage = 1;
		},
		regionFilterChange: (state, action) => {
			state.region = action.payload;
			state.currentPage = 1;
		},
		currentPageFilterChange: (state, action) => {
			state.currentPage = action.payload;
		},
		resetAllFilter: (state, action) => {
			state.currentPage = 1;
			state.search = "";
			state.region = "All";
		},
	},
});

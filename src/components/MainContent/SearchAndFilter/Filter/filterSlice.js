import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
	name: "filters",
	initialState: {
		search: "",
		region: "All",
	},
	reducers: {
		searchFilterChange: (state, action) => {
			state.search = action.payload;
		},
		regionFilterChange: (state, action) => {
			state.region = action.payload;
		},
	},
});

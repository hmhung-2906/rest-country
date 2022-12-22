import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../components/MainContent/Countries/countriesSlice";
import filterSlice from "../components/MainContent/SearchAndFilter/Filter/filterSlice";

const store = configureStore({
	reducer: {
		countriesList: countriesSlice.reducer,
		filters: filterSlice.reducer,
	},
});
export default store;

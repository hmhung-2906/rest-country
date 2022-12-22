import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
	name: "countriesList",
	initialState: {
		status: "idle",
		countries: [],
		country: null,
	},
	reducers: {
		getCountries: (state, action) => {
			state.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCountries.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(fetchCountries.fulfilled, (state, action) => {
			state.countries = action.payload;
			state.status = "idle";
		});
		builder.addCase(GetCountryByName.pending, (state, action) => {
			state.country = null;
			state.status = "loading";
		});
		builder.addCase(GetCountryByName.fulfilled, (state, action) => {
			state.country = action.payload;
			state.status = "idle";
		});
	},
});
export default countriesSlice;
export const fetchCountries = createAsyncThunk(
	"countries/fetchCountries",
	async () => {
		const res = await fetch("https://restcountries.com/v3.1/all");
		const data = await res.json();
		const countries = data.map((country) => ({
			name: country.name.common,
			capital: country.capital,
			population: new Intl.NumberFormat().format(country.population),
			region: country.region,
			flag: country.flags.png,
		}));

		return countries;
	},
);
export const GetCountryByName = createAsyncThunk(
	"countries/GetCountryByName",
	async (name) => {
		const res = await fetch(`https://restcountries.com/v2/name/${name}`);
		const data = await res.json();
		// const countries = data.map((country) => ({
		// 	name: country.name.common,
		// 	capital: country.capital,
		// 	population: new Intl.NumberFormat().format(country.population),
		// 	region: country.region,
		// 	flag: country.flags.png,
		// }));
		// console.log(countries);
		return data[0];
	},
);

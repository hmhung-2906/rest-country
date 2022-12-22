import React from "react";
import SearchAndFilter from "./SearchAndFilter/SearchAndFilter";
import Countries from "./Countries/Countries";
import { useSelector } from "react-redux";
import { statusSelector } from "../../redux/selector";
import Loading from "../Loading/Loading";
function MainContent(props) {
	const status = useSelector(statusSelector);

	return (
		<div>
			<SearchAndFilter></SearchAndFilter>

			{status === "loading" ? console.log("loading") : console.log("idle")}
			{status === "loading" ? <Loading></Loading> : <></>}
			<Countries></Countries>
		</div>
	);
}

export default MainContent;

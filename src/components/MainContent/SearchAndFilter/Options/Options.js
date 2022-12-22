import React from "react";
import { FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from "react-icons/fa";
import { GiWorld, GiEarthAsiaOceania } from "react-icons/gi";
import styled from "styled-components";
import Option from "./Option";
import { ThemeContext } from "../../../ThemeContext/ThemeContext";
import { useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
const OptionsPane = styled.div`
	width: 100%;
	position: absolute;
	overflow: hidden;
	z-index: 10;
	margin-top: 2px;
`;
const RegionsList = [
	{ icon: GiWorld, value: "All" },
	{ icon: FaGlobeAfrica, value: "Africa" },
	{ icon: FaGlobeAmericas, value: "Americas" },
	{ icon: FaGlobeAsia, value: "Asia" },
	{ icon: FaGlobeEurope, value: "Europe" },
	{ icon: GiEarthAsiaOceania, value: "Oceania" },
];
function Options({ isShowOptions }) {
	const themeContext = useContext(ThemeContext);
	const refOptions = useRef(null);
	useEffect(() => {
		const ShowOptions = () => {
			if (isShowOptions) {
				refOptions.current.style.maxHeight = refOptions.current.scrollHeight + "px";
				refOptions.current.style.transform = "scaleY(1)";
			} else {
				refOptions.current.style.maxHeight = "0";
				refOptions.current.style.transform = "scaleY(0)";
			}
		};
		ShowOptions();
		document.addEventListener("resize", ShowOptions);
		return () => {
			document.removeEventListener("resize", ShowOptions);
		};
	}, [isShowOptions]);
	return (
		<OptionsPane className={themeContext.theme} ref={refOptions}>
			{RegionsList.map((region) => (
				<Option key={region.value} region={region}></Option>
			))}
		</OptionsPane>
	);
}

export default Options;

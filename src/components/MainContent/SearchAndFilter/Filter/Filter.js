import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ThemeContext } from "../../../ThemeContext/ThemeContext";
import Options from "../Options/Options";
import { regionFilterSelector } from "../../../../redux/selector";
const FilterPane = styled.div`
	max-width: 160px;
	width: 100%;
	margin-top: 20px;
	h3 {
		font: 18px;
		font-weight: 600;
		text-shadow: var(--TextShadow);
	}
`;
const SelectPane = styled.div`
	width: 100%;
	margin-top: 8px;
	position: relative;
	span {
		font-size: 18px;
		font-weight: bold;
	}
`;
const Select = styled.div`
	padding: 0 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 4px;
	height: 34px;
	user-select: none;
`;

function Filter(props) {
	const themeContext = useContext(ThemeContext);
	const refSelect = useRef(null);
	const [isShowOptions, setIsShowOptions] = useState(false);
	const regionName = useSelector(regionFilterSelector);
	const [valueOption, setValueOption] = useState("All");
	const handleOptions = (e) => {
		if (refSelect.current) {
			setIsShowOptions(refSelect.current.contains(e.target));
		}
	};
	useEffect(() => {
		if (regionName) setValueOption(regionName);
		else setValueOption("All");
	}, [regionName]);
	useEffect(() => {
		if (isShowOptions) {
			document.addEventListener("click", handleOptions);
			return () => {
				document.removeEventListener("click", handleOptions);
			};
		}
	}, [isShowOptions]);
	return (
		<FilterPane>
			<h3>Filter by regions:</h3>
			<SelectPane>
				<Select
					className={themeContext.theme}
					ref={refSelect}
					onClick={handleOptions}
				>
					<span>{valueOption}</span>
					<FaChevronDown />
				</Select>
				<Options isShowOptions={isShowOptions}></Options>
			</SelectPane>
		</FilterPane>
	);
}

export default Filter;

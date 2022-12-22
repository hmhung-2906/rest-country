import React from "react";
import styled from "styled-components";
import filterSlice from "../Filter/filterSlice";
import { useDispatch } from "react-redux";
const OptionItem = styled.li`
	display: flex;
	align-items: center;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	padding: 4px 8px;
	&:hover {
		font-weight: bold;
		background-color: var(--SelectBackground);
		color: white;
	}
	span {
		margin-left: 4px;
	}
`;
function Option({ region }) {
	const dispatch = useDispatch();
	const handleValueOption = () => {
		dispatch(filterSlice.actions.regionFilterChange(region.value));
	};
	return (
		<OptionItem onClick={handleValueOption}>
			<region.icon />
			<div>{region.value}</div>
		</OptionItem>
	);
}

export default Option;

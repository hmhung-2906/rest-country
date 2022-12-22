import React, { useContext } from "react";
import styled from "styled-components";
import SwitchMode from "./SwitchMode";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { Link } from "react-router-dom";
const HeaderPane = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 8vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40px;
	z-index: 10;
	span a {
		color: unset;
		font-size: 24px;
		font-weight: bold;
		text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
	}
`;
function Header() {
	const themeContext = useContext(ThemeContext);
	return (
		<HeaderPane className={themeContext.theme}>
			<span>
				<Link to="/">Where is the world?</Link>
			</span>
			<SwitchMode></SwitchMode>
		</HeaderPane>
	);
}

export default Header;

import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContext/ThemeContext";
const FooterPane = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 8vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 40px;
	z-index: 10;
	.copyright {
		font-weight: 700;
	}
`;
function Footer() {
	const themeContext = useContext(ThemeContext);
	return (
		<FooterPane className={themeContext.theme}>
			<span className="copyright">Copyright © Minh Hùng</span>
			<span>minhhung.longan.2001@gmail.com</span>
		</FooterPane>
	);
}

export default Footer;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import styles from "./SwitchStyles.module.scss";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { useContext } from "react";
function SwitchMode(props) {
	const themeContext = useContext(ThemeContext);
	const [isDark, setIsDark] = useState(false);
	useEffect(() => {
		refInput.current.checked = isDark;
	}, [isDark]);
	const refInput = useRef();
	const refCircle = useRef();
	const refToggle = useRef();
	useEffect(() => {
		const changeBackgroundButton = () => {
			if (isDark) {
				refCircle.current.style.background = "#222";
				refToggle.current.style.background = "#fff";
			} else {
				refCircle.current.style.background = "#fff";
				refToggle.current.style.background = "var(--ToggleButtonBackground)";
			}
		};
		changeBackgroundButton();
		document.addEventListener("resize", changeBackgroundButton);
		return () => {
			document.removeEventListener("resize", changeBackgroundButton);
		};
	}, [isDark]);
	const handleToggle = () => {
		refInput.current.checked = !refInput.current.checked;
		setIsDark(refInput.current.checked);
		themeContext.toggleTheme();
	};
	return (
		<div className={styles.toggleButton} ref={refToggle} onClick={handleToggle}>
			<input type="checkbox" className={styles.Input} ref={refInput} />
			<div className={styles.Icon}>{isDark ? <RiMoonFill /> : <RiSunFill />}</div>
			<div className={styles.Circle} ref={refCircle}></div>
		</div>
	);
}

export default SwitchMode;

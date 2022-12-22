import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const CountryCard = styled.div`
	max-width: 420px;
	width: 100%;
	filter: brightness(1);
	overflow: hidden;
	border-radius: 4px;
	margin-bottom: 12px;
	user-select: none;
	&:hover {
		filter: brightness(0.9);
	}
	&:hover img {
		transform: scale(1.1);
	}
	.flag {
		width: 100%;
		height: 160px;
		display: block;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: all 0.2s linear;
		}
	}
`;
const CountryInfo = styled.div`
	padding: 10px 16px;
	h3 {
		margin: 16px 0;
		font-size: 20px;
		font-weight: bold;
		height: 50px;
	}
	div {
		display: block;
		font-size: 16px;
		font-weight: 700;
		margin: 4px 0;
		span {
			font-weight: 400;
			margin-left: 4px;
		}
	}
`;
function Country({ capital, flag, name, population, region }) {
	const themeContext = useContext(ThemeContext);
	return (
		<Link to={`/country/${name}`}>
			<CountryCard className={themeContext.theme}>
				<div className="flag">
					<img src={flag} alt="" />
				</div>
				<CountryInfo>
					<div>
						<h3>{name}</h3>
					</div>
					<div>
						Population:
						<span>{population}</span>
					</div>
					<div>
						Region:
						<span>{region}</span>
					</div>
					<div>
						Capital:
						<span>{capital}</span>
					</div>
				</CountryInfo>
			</CountryCard>
		</Link>
	);
}

export default Country;
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import CountryInfo from "./CountryInfo";
import { useDispatch, useSelector } from "react-redux";
import { GetCountryByName } from "../Countries/countriesSlice";
import Image from "./Image";
import { statusSelector } from "../../../redux/selector";
import Loading from "../../Loading/Loading";

function CountryDetail(props) {
	const status = useSelector(statusSelector);
	const themeContext = useContext(ThemeContext);
	const slug = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GetCountryByName(slug.countryName));
	}, [slug.countryName, dispatch]);

	return (
		<Wrapper>
			<BackButton
				className={`${themeContext.theme}`}
				onClick={() => navigate(-1)}
			>
				Go back
			</BackButton>
			{status === "loading" ? (
				<Loading></Loading>
			) : (
				<CountryContainer>
					<Image />
					<CountryInfo />
				</CountryContainer>
			)}
		</Wrapper>
	);
}
export default CountryDetail;
const Wrapper = styled.div`
	padding-top: 20px;
`;
const BackButton = styled.div`
	display: block;
	width: 80px;
	height: 28px;
	line-height: 28px;
	padding: 2px 4px;
	border-radius: 4px;
	text-align: center;
	font-weight: 500;
	filter: brightness(0.9);
	transition: all 0.3 linear;
	&:hover {
		filter: brightness(1);
		font-weight: bold;
		cursor: default;
		user-select: none;
	}
	cursor: pointer;
`;
const CountryContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 30px;
	@media only screen and (max-width: 800px) {
		flex-direction: column;
		align-items: center;
	}
`;

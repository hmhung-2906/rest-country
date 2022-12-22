import styles from "./CountryInfoStyle.module.scss";
import clsx from "clsx";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { useSelector } from "react-redux";
import { countrySelector } from "../../../redux/selector";
import { useState } from "react";
import { Link } from "react-router-dom";
function CountryInfo() {
	const themeContext = useContext(ThemeContext);
	const country = useSelector(countrySelector);
	const getLangueges = (country) => {
		let result = "";
		country.languages.forEach((language) => {
			if (result !== "") result = result + "-" + language.name;
			else result += language.name;
		});
		return result;
	};
	const getCountryNameByCode = async (code) => {
		const result = await fetch(
			`https://restcountries.com/v2/alpha?codes=${code}`,
		);
		const data = await result.json();
		return data;
	};

	const [countriesBorder, setCountriesBorder] = useState([]);
	useEffect(() => {
		if (country && country.borders) {
			getCountryNameByCode(country.borders.toString()).then((res) => {
				const countryName = res.map((country) => country.name);
				setCountriesBorder(countryName);
			});
		}
	}, [country]);
	return (
		<div className={styles.countryInfo}>
			{country ? (
				<div>
					<h3 className={styles.countryName}>{country.name}</h3>
					<table>
						<tbody>
							<tr>
								<td className={styles.countryInfo__title}>Native Name</td>
								<td>:</td>
								<td className={styles.countryInfo__value}>
									{country.nativeName}
								</td>
							</tr>
							<tr>
								<td className={styles.countryInfo__title}>Offical</td>
								<td>:</td>
								<td className={styles.countryInfo__value}>
									{country.altSpellings[1]}
								</td>
							</tr>
							<tr>
								<td className={styles.countryInfo__title}>Population</td>
								<td>:</td>
								<td className={styles.countryInfo__value}>
									{country.population}
								</td>
							</tr>
							<tr>
								<td className={styles.countryInfo__title}>Region</td>
								<td>:</td>
								<td className={styles.countryInfo__value}>{country.region}</td>
							</tr>
							<tr>
								<td className={styles.countryInfo__title}>Sub Region</td>
								<td>:</td>
								<td className={styles.countryInfo__value}>
									{country.subregion}
								</td>
							</tr>
							<tr>
								<td className={styles.countryInfo__title}>Capital</td>
								<td>:</td>
								<td className={styles.countryInfo__value}>{country.capital}</td>
							</tr>
							<tr>
								<td className={styles.countryInfo__title}>Top Level Domain</td>
								<td>:</td>
								<td className={styles.countryInfo__value}>
									{country.topLevelDomain[0]}
								</td>
							</tr>
							<tr>
								<td className={styles.countryInfo__title}>Currencies</td>
								<td>:</td>
								<td className={styles.countryInfo__value}>
									{country.currencies[0].code} - {country.currencies[0].name}
								</td>
							</tr>
							<tr>
								<td className={styles.countryInfo__title}>Languages</td>
								<td>:</td>
								<td className={styles.countryInfo__value}>
									{getLangueges(country)}
								</td>
							</tr>
							<tr>
								<td className={styles.countryInfo__title}>Border</td>
								<td>:</td>
								<td className={styles.borderList}>
									{countriesBorder.length > 0
										? countriesBorder.map((country) => (
												<Link to={`/country/${country}`} key={country}>
													<div
														className={clsx(
															styles.borderItem,
															themeContext.theme,
														)}
													>
														{country}
													</div>
												</Link>
										  ))
										: "None"}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
export default CountryInfo;

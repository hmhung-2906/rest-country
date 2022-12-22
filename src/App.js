import { useContext } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { ThemeContext } from "./components/ThemeContext/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import CountryDetail from "./components/MainContent/CountryDetail/CountryDetail";

const AppContainer = styled.div`
	min-height: 100vh;
	width: 100%;
`;
const ContentContainer = styled.div`
	max-width: 1280px;
	min-height: 100vh;
	width: 100%;
	overflow: hidden;
	margin: 0 auto;
	padding: 100px 12px;
`;
function App() {
	const themeContext = useContext(ThemeContext);

	return (
		<AppContainer className={themeContext.theme}>
			<Router>
				<Header></Header>
				<ContentContainer>
					<Routes>
						<Route exact path="/" element={<MainContent></MainContent>}></Route>
						<Route
							exact
							path="/region/:regionName"
							element={<MainContent></MainContent>}
						></Route>
						<Route
							exact
							path="/country/:countryName"
							element={<CountryDetail></CountryDetail>}
						></Route>
					</Routes>
				</ContentContainer>
				<Footer></Footer>
			</Router>
		</AppContainer>
	);
}

export default App;

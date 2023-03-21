import React, { useState } from "react";

// import "./App.scss";

// import Header from "./components/Header";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import DevPortfolio from "./components/DevPortfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [pages] = useState([
		{ name: "Homepage", component: [<Homepage />] },
		{ name: "About", component: <About /> },
		{ name: "Dev", component: <DevPortfolio /> },
		// {name: "photography", component: <Photography />},
		{ name: "Contact", component: <Contact /> },
		{ name: "Resume", component: <Resume /> },
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);

	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
		>
			<div >
				<Header
					pages={pages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
			<main>{currentPage.component}</main>

			<Footer />
		</ThemeProvider>
	);
}

export default App;

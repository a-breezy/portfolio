import React, { useState } from "react";

import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import AboutSection from "./components/AboutSection";
import DevPortfolio from "./components/DevPortfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [pages] = useState([
		{ name: "Homepage", component: [<Hero />, <AboutMe />] },
		{ name: "About", component: <AboutSection /> },
		{ name: "Dev", component: <DevPortfolio /> },
		// {name: "photography", component: <Photography />},
		{ name: "Contact", component: <Contact /> },
		{ name: "Resume", component: <Resume /> },
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);

	return (
		<div className="full-screen">
			<ThemeProvider
				breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
			>
				<Header
					pages={pages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
				<main>
					<h3>{currentPage.name}</h3>
					{currentPage.component}
				</main>
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;

import React, { useState } from "react";

import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import About from "./components/About";
import DevPort from "./components/DevPort";
import PhotoPort from "./components/PhotoPort";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [pages] = useState([
		{ name: "Homepage", component: [<Homepage />] },
		{ name: "About", component: <About /> },
		{ name: "Dev", component: <DevPort /> },
		{ name: "Photography", component: <PhotoPort /> },
		{ name: "Contact", component: <Contact /> },
		{ name: "Resume", component: <Resume /> },
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);

	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
		>
			<Header
				pages={pages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
			<main>{currentPage.component}</main>

			<Footer />
		</ThemeProvider>
	);
}

export default App;

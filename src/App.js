import React, { useState } from "react";

import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import AboutSection from "./components/AboutSection";

import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const pages = [
		{ name: "home", component: <Hero /> },
		{ name: "about", component: <AboutSection /> },
		// {name: "dev", component: <Dev /> + <AboutMe />},
		// {name: "photography", component: <Photography />},
		// {name: "contact", component: <Contact />},
		// {name: "resume", component: <Resume />},
	];

	const [page, setPage] = useState(pages.home);

	return (
		<div className="full-screen">
			<ThemeProvider
				breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
			>
				<Header pages={pages} setPage={setPage} />
				<main>{page}</main>
				<AboutSection />
				{/* <div className="body">
					<Hero />
					<AboutMe />
				</div> */}
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;

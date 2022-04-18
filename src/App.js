import React from "react";

import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="full-screen">
			<ThemeProvider
				breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
			>
				<Header />
				<div className="body">
					<Hero />
					<div>content goes here</div>
				</div>
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;

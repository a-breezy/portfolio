import React from "react";

import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
		>
			<Header />
			<div>content goes here</div>
			<Footer />
		</ThemeProvider>
	);
}

export default App;

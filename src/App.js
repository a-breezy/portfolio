import React from "react";

import "./App.scss";

import Header from "./components/Header";

import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
		>
			<div>
				<Header />
			</div>
			<div>content goes here</div>
		</ThemeProvider>
	);
}

export default App;

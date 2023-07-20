import React, { useState } from "react";

// import Footer from "./components/Footer";
import Nav from "./components/Nav";

// page components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import ThankYou from "./pages/ThankYou";

import { ThemeProvider } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const checkSession = () => {
		if (sessionStorage.getItem("currentPage") === null) {
			return "Home";
		} else {
			return sessionStorage.getItem("currentPage");
		}
	};
	const [pages] = useState(["Home", "Contact", "Resume", "Projects"]);
	const [currentPage, setCurrentPage] = useState(checkSession());
	sessionStorage.setItem("currentPage", currentPage);

	const projects = [
		{
			name: "Let's Eat",
			description:
				"A restaurant randomizer where users input their location and the Yelp Fusion API returns a random restaurant based on that location. The returned restaurant is then plotted on a Google Map, showing the user where to get their next meal!",
			url: "https://a-breezy.github.io/LetsEat",
			github: "https://github.com/a-breezy/LetsEat",
			technologies: [
				"HTML",
				"JavaScript",
				"CSS",
				"Bulma",
				"Polyfill.io",
				"Google Maps API",
				"Yelp Fusion API",
				"Axios.js",
				"CORS",
				"Express.js",
			],
			image: "letsEat",
		},
		{
			name: "MoodRng",
			description:
				"A mood-tracking web app where users log mood, diet, exercise, and sleep to find trends over time. Users create an accound through a MySQL database, login, and log their data over time. The logged data is then graphed with D3.js, color-coating their mood based on their happiness. From there users are able to see what habits have brought the greatest happiness and maximise their joy!",
			url: null,
			github: "https://github.com/a-breezy/MoodRng",
			technologies: [
				"D3.js",
				"JavaScript",
				"Express.js",
				"Express-Session",
				"Handlebars.js",
				"Express-Handlebars",
				"MySQL2",
				"Sequelize",
				"Connect-session-sequelize",
				"bcrypt",
				"dotenv",
			],
			image: "moodRng",
		},
		{
			name: "Kitchen Sink",
			description:
				"A web app for recipe creation and sharing. The MongoDB database allows users to seemlessly create new recipes and add new ingredients, which can later be searched. This enables users to find recipes based on whatever they have at hand, instead of having to go to the grocery store to buy ingredients.",
			url: null,
			github: "https://github.com/antger78/kitchen_sink",
			technologies: [
				"React.js",
				"React Router",
				"Express.js",
				"GraphQL",
				"MongoDB",
				"Mongoose",
				"Apollo GraphQL",
				"bcrypt",
				"JSON Web Token",
				"Bootstrap/React Bootstrap",
			],
			image: "kitchenSink",
		},
	];

	return (
		<ThemeProvider breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}>
			<Router>
				<Nav
					pages={pages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>

				<main>
					<Routes>
						<Route path="/" element={<Home projects={projects} />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/resume" element={<Resume />} />
						<Route
							path="/projects"
							element={<Projects projects={projects} />}
						/>
						<Route path="thankyou" element={<ThankYou />} />

						<Route path="*" element={<Home projects={projects} />} />
					</Routes>
				</main>
			</Router>

			{/* <Footer /> */}
		</ThemeProvider>
	);
}

export default App;

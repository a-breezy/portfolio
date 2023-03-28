import React, { useState } from "react";

import Footer from "./components/Footer";
import Navagation from "./components/Nav";
import Homepage from "./components/Homepage";
import About from "./components/About";
import DevPortfolio from "./components/DevPortfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

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

	const projects = [
		{
			name: "Let's Eat",
			description:
				"A web app that takes in user location and generates a random restaurant assignment. For user with hunger, but no idea where to eat",
			url: "https://a-breezy.github.io/LetsEat",
			github: "https://github.com/a-breezy/LetsEat",
			technologies: [
				"HTML",
				"JavaScript",
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
				"A mood tracker in which user log their mood as well as what they've eaten, exercise, and sleep for a given day. The data is then graphed before beign presented back to the user so that they can determine which habits have the greatest benefits.",
			url: "https://moodrngwellnessapp.herokuapp.com/",
			github: "https://github.com/a-breezy/MoodRng",
			technologies: [
				"HTML",
				"JavaScript",
				"Handlebars.js",
				"Express.js",
				"Sequelize",
				"MySQL2",
				"bcrypt",
			],
			image: "moodRng",
		},
		// Haven't included kitchensink stuff yet
		// {
		// 	name: "Kitchen Sink",
		// 	description:
		// 		"A web app that takes in user location and generates a random restaurant assignment. For user with hunger, but no idea where to eat",
		// 	url: "https://kitchen-sink.herokuapp.com/",
		// 	github: "https://github.com/antger78/kitchen_sink",
		// 	technologies: [
		// 		"JavaScript",
		// 		"React.js",
		// 		"Apollo GraphQL",
		// 		"Express.js",
		// 		"Mongoose",
		// 		"Bootstrap/React Bootstrap",
		// 		"bcrypt",
		// 	],
		// 	image: "kitchenSink",
		// },
	];

	const [currentPage, setCurrentPage] = useState(pages[0]);

	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
		>
			<div id="hero">
				<Navagation
					pages={pages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
			<main>
				<Skills projects={projects} />
			</main>

			{/* <Footer /> */}
		</ThemeProvider>
	);
}

export default App;

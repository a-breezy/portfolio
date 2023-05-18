import React, { useState } from "react";

// import Footer from "./components/Footer";
import Nav from "./components/Nav";

// page components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [pages] = useState(["Home", "Contact", "Resume", "Projects"]);
	const [currentPage, setCurrentPage] = useState(pages[0]);

	const projects = [
		{
			name: "Let's Eat",
			description:
				"A restuurant randomizer where users input their location and the Yelp Fusion API returns a random restaurant based on that location. The returned restaurant is then plotted on a Google Map, showing the user where to get their next meal!",
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
				"A mood tracker in which user log their mood as well as what they've eaten, exercise, and sleep for a given day. The data is then graphed, using D3.js, in a color-coated fashion to help users determin what habits bring the greatest benefit.",
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
		// 		"A recipe app where users create and share recipes with one another. On top of that the flexibility of NoSQL allows for users to search by ingredients so that they can cook whatever they have at hand.",
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
						{/* <Route
							path="/projects"
							element={<Projects />}
							projects={projects}
						/> */}

						<Route path="*" element={<Home projects={projects} />} />
					</Routes>
				</main>
			</Router>

			{/* <Footer /> */}
		</ThemeProvider>
	);
}

export default App;

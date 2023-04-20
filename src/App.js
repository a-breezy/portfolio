import React, { useState } from "react";

// import Footer from "./components/Footer";
// import Navagation from "./components/Nav";

// import About from "./components/About";
// import DevPortfolio from "./components/DevPortfolio";
// import Resume from "./components/Resume";
// import Contact from "./components/Contact";
// import Skills from "./components/Skills";

// page components
import Home from "./pages/Home";

import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	// const [pages] = useState([
	// 	// { name: "Home", component: [<Home />] },
	// 	// { name: "About", component: <About /> },
	// 	// { name: "Dev", component: <DevPortfolio /> },
	// 	// {name: "photography", component: <Photography />},
	// 	// { name: "Contact", component: <Contact /> },
	// 	// { name: "Resume", component: <Resume /> },
	// ]);

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
	console.log(projects);
	// const [currentPage, setCurrentPage] = useState(pages[0]);

	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
		>
			{/* 
				header/hero
				eventually will hold a menu bar
			 */}
			<div id="hero">
				{/* <Navagation
					pages={pages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/> */}
			</div>
			<main>
				<Router>
					<Routes>
						<Route path="/" element={<Home projects={projects} />} />
						{/* <Route path="/projects" element={<Projects />} projects={projects} /> */}
						{/* <Route path="/contact" element={<Contact />} /> */}
						{/* <Route path="/resume" element={<Resume />} /> */}
					</Routes>
				</Router>
			</main>

			{/* <Footer /> */}
		</ThemeProvider>
	);
}

export default App;

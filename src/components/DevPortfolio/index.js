import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// import "./index.scss";
import letsEat from "../../assets/img/dev/letsEat.png";
import friendlyThoughts from "../../assets/img/dev/friendlyThoughts.png";
import moodRng from "../../assets/img/dev/moodRng.png";
import noteTaker from "../../assets/img/dev/noteTaker.png";
import saveTheSteer from "../../assets/img/dev/saveTheSteer.png";
import wordSquash from "../../assets/img/dev/wordSquash.png";

// Make this page more dynamic - everything renders using Map() to post 
	// information based on an array of objects for each project

const DevPortfolio = () => {
	return (
		<Container className="project boder border-3">
			<h3 className="mt-2 text-center">Dev Portfolio</h3>
			{/* Project 1: Let's Eat */}
			<Row className="project-1 py-3">
				<Col className="border border-2 project-col">
					<h4 className="text-center">Let's Eat</h4>
					<p>
						&ensp;A web app that takes in user location and generates a random
						restaurant assignment. For user with hunger, but no idea where to
						eat
					</p>
					<a
						href="https://a-breezy.github.io/LetsEat/"
						className="btn border border-2 mb-1 mx-auto"
					>
						View live page
					</a>
					<br />
					<a
						href="https://github.com/a-breezy/LetsEat"
						className="btn border border-2"
					>
						View GitHub Repo
					</a>
				</Col>
				<Col sm={6} className="image-col border border-2">
					<img
						src={letsEat}
						alt="lets eat app"
						className="img align-self-center"
					/>
				</Col>
				<Col className="border border-2 profile-col">
					<h4 className="text-center">Technologies Used</h4>
					<ul>
						<li>HTML</li>
						<li>Javascript</li>
						<li>Bulma</li>
						<li>Google Maps</li>
						<li>jQuery</li>
						<li>Moment</li>
						<li>Polyfill.io</li>
					</ul>
				</Col>
			</Row>

			{/* Project 2: MoodRng */}
			<Row className="project-2 py-3">
				<Col className="border border-2 project-col">
					<h4 className="text-center">MoodRng</h4>
					<p>
						&ensp;A mood tracker in which user log their mood as well as what
						they've eaten, exercise, and sleep for a given day. The data is then
						graphed before beign presented back to the user so that they can
						determine which habits have the greatest benefits.
					</p>
					<a
						href="https://moodrngwellnessapp.herokuapp.com/"
						className="btn border border-2 mb-1 mx-auto"
					>
						View live page
					</a>
					<br />
					<a
						href="https://github.com/a-breezy/MoodRng"
						className="btn border border-2"
					>
						View GitHub Repo
					</a>
				</Col>
				<Col sm={6} className="image-col border border-2">
					<img
						src={moodRng}
						alt="MoodRng app"
						className="img align-self-center"
					/>
				</Col>
				<Col className="border border-2 profile-col">
					<h4 className="text-center">Technologies Used</h4>
					<ul>
						<li>HTML</li>
						<li>Javascript</li>
						<li>Express.js</li>
						<li>handlebars.js</li>
						<li>Sequelize</li>
						<li>MySQL2</li>
						<li>bycrypt</li>
						<li>connect-session-sequelize</li>
						<li>express-session</li>
						<li>express-handlebars</li>
					</ul>
				</Col>
			</Row>

			{/* Project 3: Save the Steer */}
			<Row className="project-2 py-3">
				<Col className="border border-2 project-col">
					<h4 className="text-center">Save the Steer</h4>
					<p>
						&ensp;A progressive web app that lets uses create a budget
						regardless of internet status. Users can add or subtract funds and
						give names to each transaction.
					</p>
					<a
						href="https://quiet-river-39422.herokuapp.com/"
						className="btn border border-2 mb-1 mx-auto"
					>
						View live page
					</a>
					<br />
					<a
						href="https://github.com/a-breezy/save-the-steer"
						className="btn border border-2"
					>
						View GitHub Repo
					</a>
				</Col>
				<Col sm={6} className="image-col border border-2">
					<img
						src={saveTheSteer}
						alt="Save the Steer app"
						className="img align-self-center"
					/>
				</Col>
				<Col className="border border-2 profile-col">
					<h4 className="text-center">Technologies Used</h4>
					<ul>
						<li>Javascript</li>
						<li>Express.js</li>
						<li>Compression</li>
						<li>MongoDB</li>
						<li>Mongoose</li>
						<li>Morgan</li>
					</ul>
				</Col>
			</Row>

			{/* Project 4: Friendly Thoughts */}
			<Row className="project-2 py-3">
				<Col className="border border-2 project-col">
					<h4 className="text-center">Friendly Thoughts</h4>
					<p>
						&ensp;A Mongoose based social media backend, which creates models to
						manage a platform's MongoDB database. It includes controllers,
						routes, and a server to help power a social media frontend.
					</p>
					<br />
					<a
						href="https://github.com/a-breezy/friendly-thoughts"
						className="btn border border-2"
					>
						View GitHub Repo
					</a>
					<br />
					<p>
						Check out the readme for full description on how to get Friendly
						Thoughts up and running
					</p>
				</Col>
				<Col sm={6} className="image-col border border-2">
					<img
						src={friendlyThoughts}
						alt="Friendly Thoughts app"
						className="img align-self-center"
					/>
				</Col>
				<Col className="border border-2 profile-col">
					<h4 className="text-center">Technologies Used</h4>
					<ul>
						<li>Javascript</li>
						<li>express.js</li>
						<li>Node.js</li>
						<li>Mongoose</li>
						<li>MongoDB</li>
					</ul>
				</Col>
			</Row>

			{/* Project 5: Expert Note Taker */}
			<Row className="project-2 py-3">
				<Col className="border border-2 project-col">
					<h4 className="text-center">Save the Steer</h4>
					<p>
						&ensp;The server that runs a note taking app to create, save, and
						delete notes.
					</p>
					<br />
					<a
						href="https://github.com/a-breezy/Expert-Note-Taker"
						className="btn border border-2"
					>
						View GitHub Repo
					</a>
				</Col>
				<Col sm={6} className="image-col border border-2">
					<img
						src={noteTaker}
						alt="expert note taker app"
						className="img align-self-center"
					/>
				</Col>
				<Col className="border border-2 profile-col">
					<h4 className="text-center">Technologies Used</h4>
					<ul>
						<li>Javascript</li>
						<li>Express.js</li>
					</ul>
				</Col>
			</Row>

			{/* Project 6: Word Squash */}
			<Row className="project-2 py-3">
				<Col className="border border-2 project-col">
					<h4 className="text-center">Save the Steer</h4>
					<p>
						&ensp;A WordPress style blog where users can create an account and
						start posting their ideas.
					</p>
					<a
						href="https://stormy-ridge-45640.herokuapp.com/"
						className="btn border border-2 mb-1 mx-auto"
					>
						View live page
					</a>
					<br />
					<a
						href="https://github.com/a-breezy/wordsquash"
						className="btn border border-2"
					>
						View GitHub Repo
					</a>
				</Col>
				<Col sm={6} className="image-col border border-2">
					<img
						src={wordSquash}
						alt="Word Squash app"
						className="img align-self-center"
					/>
				</Col>
				<Col className="border border-2 profile-col">
					<h4 className="text-center">Technologies Used</h4>
					<ul>
						<li>Javascript</li>
						<li>Express.js</li>
						<li>Sequelize</li>
						<li>MySQL2</li>
						<li>bycrypt</li>
						<li>express-handlebars</li>
						<li>express-session</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default DevPortfolio;

import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import profilePic from "../../assets/img/homepage/profile.jpg";

const Skills = () => {
	let languages = ["JavaScript", "Python", "HTML5", "CSS"];
	let backendFrameworks = [
		"Node.js",
		"React",
		"Express.js",
		"Axios",
		"CORS",
		"RESTful API",
		"bcrypt",
	];
	let frontendFrameworks = [
		"Bootstrap",
		"React Bootstrap",
		"Bulma",
		"D3.js",
		"jQuery",
		"Handlebars.js",
	];
	let databases = [
		"SQL",
		"Sequelize",
		"NoSQL",
		"MongoDB",
		"Mongoose",
		"GraphQL",
		"Heroku",
	];

	return (
		<Container id="skills">
			<Row className="dev-section">
				<h2 className="text-center">FULLSTACK DEVELOPER</h2>
				<Col>
					<img src={profilePic} className="rounded-circle" alt="Profile" />
				</Col>
				<Col>
					<Container>
						<Row>
							<p className="text-center">
								I'm Ambrose, a MERN stack developer based in New York City. I'm
								familiar in frontend and backend and I've certified by Columbia
								University.
							</p>
							<p className="text-center">
								I've got experience creating Express.js servers and hosting
								projects on Heroku. As for databases and storage I've learnt
								NoSQL using MongoDB as well as SQL with frameworks like
								Sequelize.js for modeling data as tables in the database.
							</p>
							<p className="text-center">
								As far as frontend frameworks go, I started by learning
								Handlebars.js for templating and getting the skeleton together.
								I think I excel greater with Reacts and the components that one
								creates there. I've been using Bootsrap as well as React
								Bootstrap to help with creating responsive designs.
							</p>
						</Row>
						<Row>
							<h3 className="text-center">Languages</h3>
							<ListGroup horizontal>
								<ListGroup.Item>JavaScript</ListGroup.Item>
								<ListGroup.Item>Python</ListGroup.Item>
								<ListGroup.Item>HTML</ListGroup.Item>
								<ListGroup.Item>CSS</ListGroup.Item>
							</ListGroup>
						</Row>
						<Row>
							<h3 className="text-center">Databases</h3>
							<ListGroup horizontal>
								<ListGroup.Item>SQL</ListGroup.Item>
								<ListGroup.Item>NoSQL</ListGroup.Item>
								<ListGroup.Item>Apollo GraphQL</ListGroup.Item>
								<ListGroup.Item>Heroku</ListGroup.Item>
								<ListGroup.Item>Axios.js</ListGroup.Item>
							</ListGroup>
						</Row>
					</Container>
				</Col>
			</Row>
			<Row className="py-5">
				<Col sm={2} className="px-1">
					<h4 className="py-1 text-center">Frameworks</h4>
					<ul>
						<li>React (this portfolio was made with React)</li>
						<li>Express.js</li>
						<li>Node.js</li>
						<li>Axios</li>
						<li>Axios</li>
					</ul>
				</Col>
				<Col sm={5}>
					<h4 className="py-1 text-center">Languages</h4>
					<ul className="list-group list-group-horizontal py-1 text-center">
						<li className="list-group-item">HTML</li>
						<li className="list-group-item">CSS</li>
						<li className="list-group-item">Javascript</li>
						<li className="list-group-item">Bootstrap</li>
						<li className="list-group-item">jQuery</li>
					</ul>
					<ul className="list-group list-group-horizontal py-1 text-center">
						<li className="list-group-item align-middle">Node.js</li>
						<li className="list-group-item align-middle">Express.js</li>
						<li className="list-group-item align-middle">SQL</li>
						<li className="list-group-item align-middle">
							Object-Relational Mapping
						</li>
					</ul>
					<ul className="list-group list-group-horizontal py-1 text-center">
						<li className="list-group-item">NoSQL</li>
						<li className="list-group-item">React</li>
						<li className="list-group-item">GraphQL</li>
						<li className="list-group-item">Progressive Web Application</li>
					</ul>
				</Col>

				{/* map through array of projects with little image of them */}
				<Col sm={5}>
					<h4 className="py-1 text-center">Projects</h4>
					<h6 className="text-center">Kitchen Sink</h6>
					<p>
						A recipe web app to help user decide on what to cook based on what
						ingredients they have.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Skills;

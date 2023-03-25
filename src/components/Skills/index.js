import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profilePic from "../../assets/img/homepage/profile.jpg";

const Skills = () => {
	let skillsArray = [
		{ name: "Languages", skills: ["JavaScript", "Python", "HTML5", "CSS"] },
		{
			name: "Backend Frameworks",
			skills: [
				"Node.js",
				"React",
				"Express.js",
				"Axios",
				"CORS",
				"RESTful API",
				"bcrypt",
			],
		},
		{
			name: "Frontend Frameworks",
			skills: [
				"Bootstrap",
				"React Bootstrap",
				"Bulma",
				"D3.js",
				"jQuery",
				"Handlebars.js",
			],
		},
		{
			name: "Databases",
			skills: [
				"SQL",
				"Sequelize",
				"NoSQL",
				"MongoDB",
				"Mongoose",
				"GraphQL",
				"Heroku",
			],
		},
	];

	const listSkills = skillsArray.map((skill, i) => (
		<Row key={skill.name}>
			<h4 className="text-center">{skill.name}</h4>

			<ul key={(skill.skills, i)}>
				{skill.skills.map((str) => {
					return <li>{str}</li>;
				})}
			</ul>
		</Row>
	));

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
					</Container>
				</Col>
			</Row>
			<Row>
				<Col>
					{/* map through skills */}
					<h3 className="text-center">Skills</h3>
					{skillsArray.map((skill, i) => (
						<Row key={skill.name}>
							<h4 className="text-center">{skill.name}</h4>
							<ul key={(skill.skills, i)}>
								{skill.skills.map((str) => {
									return <li>{str}</li>;
								})}
							</ul>
						</Row>
					))}
				</Col>
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

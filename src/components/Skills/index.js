import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Project from "../Project";
import profilePic from "../../assets/img/homepage/profile.jpg";

const Skills = ({ projects }) => {
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

	return (
		<Container id="skills">
			<Row className="about-section">
				<h2 className="text-center">FULLSTACK DEVELOPER</h2>
				<Col sm={5}>
					<img src={profilePic} className="rounded-circle" alt="profile pic" />
				</Col>
				<Col>
					<h3 className="py-3 text-center">A Bit About Me</h3>
					<p className="text-center">
						I'm Ambrose, a MERN stack developer based in New York City. I'm
						familiar in frontend and backend which I've been certified for by
						Columbia University.
					</p>
					<p className="text-center">
						I've got experience creating Express.js servers and deploying
						projects to Heroku. As for databases and storage I've learnt NoSQL
						using MongoDB as well as SQL with frameworks like Sequelize.js for
						modeling data as tables in the database.
					</p>
					<p className="text-center">
						As far as frontend frameworks go, I started by learning
						Handlebars.js for templating and getting the skeleton together. I
						think I excel greater with Reacts and the components that one
						creates there. I've been using Bootsrap as well as React Bootstrap
						to help with creating responsive designs.
					</p>
				</Col>
			</Row>
			<Row className="skills-projects">
				<Col sm={5}>
					<h3 className="text-center">Skills</h3>
					{skillsArray.map((skill, i) => {
						return (
							<Row key={skill.name}>
								<h4 className="text-center">{skill.name}</h4>
								<ul key={(skill.skills, i)}>
									{skill.skills.map((str) => {
										return <li key={str}>{str}</li>;
									})}
								</ul>
							</Row>
						);
					})}
				</Col>
				<Col>
					<Project projects={projects[0]} />
				</Col>
			</Row>
		</Container>
	);
};

export default Skills;

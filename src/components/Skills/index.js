import React from "react";
import { Col, Row } from "react-bootstrap";

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

	return (
		// <Container id="skills">
		// 	<Row className="skills-projects">
		<>
			<h3 className="text-center">Skills</h3>
			{skillsArray.map((skill, i) => {
				return (
					<Row key={skill.name}>
						<h4 className="text-center">{skill.name}</h4>
						<ul className="technology-skills" key={(skill.skills, i)}>
							{skill.skills.map((str) => {
								return (
									<li className="skill" key={str}>
										{str}
									</li>
								);
							})}
						</ul>
					</Row>
				);
			})}
		</>
		// 	</Row>
		// </Container>
	);
};

export default Skills;

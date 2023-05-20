import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Skills from "../components/Skills";
import About from "../components/About";
import Project from "../components/Project";

const Home = ({ projects }) => {
	return (
		<Container id="home">
			<About />
			<Row id="skills-project">
				<Col id="skills" md={6}>
					<Skills />
				</Col>
				<Col id="project" md={6}>
					<h3 className="py-1 mt-4 text-center">Projects</h3>
					<Project projects={projects[0]} />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;

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
				<Col id="skills" sm={5}>
					<Skills />
				</Col>
				<Col id="projects">
					<Project projects={projects[0]} />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;

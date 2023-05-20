import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Project from "../components/Project";

const Projects = ({ projects }) => {
	console.log("projects arr", projects);
	return (
		<Container className="py-5" id="contact">
			<h2 className="py-4 text-center">Projects</h2>
			<Row className="text-center contact-row pt-3">
				{projects.map((project) => {
					console.log("project", project);
					return (
						<Col md={6}>
							<Project projects={project} key={project} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Projects;

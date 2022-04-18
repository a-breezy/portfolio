import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./index.scss";

const Hero = () => {
	return (
		<div className="about">
			<Container className="about-container">
				<Row className="about-row">
					<Col className="border border-2">
						<h6 className="py-1 my-1 text-center border border-2">DEVELOPER</h6>
						<p className="py-1 my-1 text-center border border-2">
							A bit about me
						</p>
					</Col>
					<Col className="border border-2">
						<h6 className="py-1 my-1 text-center border border-2">LANGUAGES</h6>
						<ul className="list-group list-group-horizontal py-1 my-1 text-center border border-2">
							<li className="list-group-item">HTML</li>
							<li className="list-group-item">CSS</li>
							<li className="list-group-item">Javascript</li>
							<li className="list-group-item">Bootstrap</li>
							<li className="list-group-item">jQuery</li>
						</ul>
						<ul className="list-group list-group-horizontal py-1 my-1 text-center border border-2">
							<li className="list-group-item align-middle">Node.js</li>
							<li className="list-group-item align-middle">Express.js</li>
							<li className="list-group-item align-middle">SQL</li>
							<li className="list-group-item align-middle">
								Object-Relational Mapping
							</li>
						</ul>
						<ul className="list-group list-group-horizontal py-1 my-1 text-center border border-2">
							<li className="list-group-item">NoSQL</li>
							<li className="list-group-item">React</li>
							<li className="list-group-item">GraphQL</li>
							<li className="list-group-item">Progressive Web Application</li>
						</ul>
					</Col>
					<Col className="border border-2">
						<h6 className="py-1 my-1 text-center border border-2">
							RECENT PROJECT
						</h6>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Hero;

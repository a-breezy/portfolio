import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Homepage = () => {
	return (
		<Container>
			<Row className="py-5">
				<Col sm={2} className="px-1">
					<h4 className="py-1 text-center">DEVELOPER</h4>
					<p className="py-3 my-1 text-center">
						I'm Ambrose, a full stack MERN engineer in New York City. I'm
						certified by Columbia University in full stack engineering.
					</p>
				</Col>
				<Col sm={5}>
					<h4 className="py-1 text-center">LANGUAGES</h4>
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
				<Col sm={5}>
					<h4 className="py-1 text-center">RECENT PROJECT</h4>
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

export default Homepage;

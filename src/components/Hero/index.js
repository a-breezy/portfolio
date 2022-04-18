import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./index.scss";

const Hero = () => {
	return (
		<div className="hero">
			<Container className="hero-container">
				<Row className="hero-row align-items-center">
					<Col className="mb-5">
						<h3 className="p-2">An Undefined Journey</h3>
					</Col>
					<Col className="mt-5">
						<h5 className="p-1 text-center align-middle">
							Following each Logical turn
							<br />
							along life's illogical road
						</h5>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Hero;

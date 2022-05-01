import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
	return (
		<Container className="py-4">
			<h3 className="pt-3 text-center">Contact</h3>
			<Row className="text-center contact-row pt-3">
				<Col>
					<h5 className="text-start">Reach Out</h5>
					<p className="text-start">
						Please contact me via email or phone if you're looking for a MERN
						developer or have a projec you want consultation on
					</p>
				</Col>
				<Col>
					<div className="py-2">
						<h6>email: </h6>
						<a href="mailto:ambrose.wilkins@gmail.com" className="text-start">
							ambrose.wilkins@gmail.com
						</a>
					</div>
					<div className="py-2">
						<h6>phone: </h6>
						<a href="tel:2074515536" className="text-start">
							+1.207.451.5536
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;

import React from "react";
import { Container, Row } from "react-bootstrap";

import "./index.scss";

const Contact = () => {
	return (
		<div className="contact">
			<h3 className="pt-3 text-center">Contact</h3>
			<Container className="contact-container">
				<Row className="text-center contact-row my-3">
					<h5 className="text-start">Reach Out</h5>
					<p className="text-start">
						Please contact me via email or phone if you're looking for a MERN
						developer or have a projec you want consultation on
					</p>
					<br />
					email:
					<a href="mailto:ambrose.wilkins@gmail.com" className="text-start">
						ambrose.wilkins@gmail.com
					</a>
					phone:
					<a href="tel:2074515536" className="text-start">
						+1.207.451.5536
					</a>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;

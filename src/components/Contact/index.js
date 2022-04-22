import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./index.scss";

const Contact = () => {
	// const handleClick = () => {
	//     setPage('page')
	// };

	return (
		<div className="contact">
			<h3 className="mt-3 text-center">Contact</h3>
			<Container className="contact-container">
				<Row className="text-center contact-row my-3">
					<h6 className="text-start">Reach Out</h6>
					<br />
					<a href="mailto:ambrose.wilkins@gmail.com" className="text-start">
						email:
					</a>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;

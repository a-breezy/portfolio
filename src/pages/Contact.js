import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import ContactFormSubmit from "../components/ContactFormSubmit";

const Contact = () => {
	const [thankYou, setThankYou] = useState(false);
	console.log(thankYou);

	return thankYou ? (
		<ContactFormSubmit />
	) : (
		<Container className="py-5" id="contact">
			<h2 className="py-4 text-center">Contact</h2>
			<Row className="text-center contact-row pt-3">
				<Col md={6}>
					<h3 className="text-center py-3">Reach Out</h3>
					<p className="py-3">
						Need help getting your website off the ground? Want to chat with
						someone who can help design and implement your full stack
						application to make a robust website?
					</p>
					<p className="py-2">
						Fill in the contact form below and I'll be quick to get back to you
						with how I can make your project become a reality!
					</p>
				</Col>
				<Col md={6}>
					<ContactForm thankYou={thankYou} setThankYou={setThankYou} />
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;

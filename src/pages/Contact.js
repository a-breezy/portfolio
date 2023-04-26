import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const { name, email, message } = formState;
	const [errorMessage, setErrorMessage] = useState("");

	function validateEmail(email) {
		var re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid");
			} else {
				setErrorMessage("");
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}
	return (
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
					<form id="contact-form" onSubmit={handleSubmit}>
						<div className="py-4">
							<input
								type="text"
								name="name"
								className="input"
								placeholder="Name..."
								defaultValue={name}
								onBlur={handleChange}
							/>
						</div>
						<div className="py-4">
							<input
								type="email"
								name="email"
								className="input"
								placeholder="Email..."
								defaultValue={email}
								onBlur={handleChange}
							/>
						</div>
						<div className="py-4">
							<textarea
								rows="5"
								name="message"
								placeholder="Your message here..."
								className="input"
								defaultValue={message}
								onBlur={handleChange}
							/>
						</div>
						<button type="submit">Submit</button>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;

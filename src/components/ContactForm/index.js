import React, { useState } from "react";

const ContactForm = (props) => {
	const { thankYou, setThankYou } = props;
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
		setThankYou(true);
		console.log(formState);
	}
	return (
		<form
			id="contact-form"
			onSubmit={handleSubmit}
			action="https://formsubmit.co/ambrose.wilkins@gmail.com"
			method="POST"
		>
			<div className="py-4">
				<input
					type="text"
					name="name"
					className="input"
					placeholder="Name"
					defaultValue={name}
					onBlur={handleChange}
					required
				/>
			</div>
			<div className="py-4">
				<input
					type="email"
					name="email"
					className="input"
					placeholder="Email"
					defaultValue={email}
					onBlur={handleChange}
					required
				/>
			</div>
			<div className="py-4">
				<textarea
					rows="5"
					name="message"
					placeholder="Your message here"
					className="input"
					defaultValue={message}
					onBlur={handleChange}
					required
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ContactForm;

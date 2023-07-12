import React, { useState } from "react";

const ContactForm = (props) => {
	const { setThankYou } = props;
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

	// Will eventually change state of contact page to just have a thankyou message
	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	console.log("submit");
	// 	setThankYou(true);
	// }

	return (
		<form
			id="contact-form"
			target="_blank"
			action="https://formsubmit.co/8b99b88dee7cf12a8ddd537aa2fa9861"
			method="POST"
		>
			<div className="py-4">
				<input
					type="text"
					name="name"
					className="input"
					placeholder="Name"
					defaultValue={name}
					onChange={handleChange}
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
					onChange={handleChange}
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
					onChange={handleChange}
					required
				/>
			</div>
			{/* <input type="hidden" name="_next" onSubmit={handleSubmit} /> */}
			<button type="submit">Send</button>
		</form>
	);
};

export default ContactForm;

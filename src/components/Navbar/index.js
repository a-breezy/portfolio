import React from "react";
import { Container } from "react-bootstrap";

import "./index.scss";

const Navbar = () => {
	// pages state goes here
	return (
		<Container>
			<ul className="nav-links">
				<li className="nav-about">
					<a>About</a>
				</li>
				<li className="nav-dev-portfolio">
					<a>Dev Portfolio</a>
				</li>
				<li className="nav-photo-portfolio">
					<a>Photography Portfolio</a>
				</li>
				<li className="nav-contact">
					<a>Contact Me</a>
				</li>
			</ul>
		</Container>
	);
};

export default Navbar;

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./index.scss";
// import Navbar from "../Navbar";

const Header = () => {
	return (
		<footer className="footer">
			<Navbar bg="light" expand="sm" fixed="bottom">
				<Container>
					<Navbar.Brand href="#home" className="mx-left">
						<h6 className="copy">
							Ambrose.Wilkinson &copy;{new Date().getFullYear()}
						</h6>
					</Navbar.Brand>
					<Nav className="me-right social">
						<Nav.Link href="https://github.com/a-breezy">
							<i className="fa-brands fa-github-square fa-2x"></i>
						</Nav.Link>
						<Nav.Link href="https://www.linkedin.com/in/ambrose-wilkinson/">
							<i className="fa-brands fa-linkedin fa-2x"></i>
						</Nav.Link>
						<Nav.Link href="https://twitter.com/a_breezy64">
							<i className="fa-brands fa-twitter fa-2x"></i>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</footer>
	);
};

export default Header;

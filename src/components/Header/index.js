import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./index.scss";
// import Navbar from "../Navbar";

const Header = () => {
	return (
		<header className="header">
			<Navbar bg="light" expand="md" fixed="top">
				<Container>
					<Navbar.Brand href="#home">
						<h1 className="logo">AW</h1>
						<h3 className="name">Ambrose Wilkinson</h3>
					</Navbar.Brand>
					<Nav className="me-right">
                        {/* must add links */}
						<Nav.Link>About</Nav.Link>
						<Nav.Link>Dev Portfolio</Nav.Link>
						<Nav.Link>Photograph Portfolio</Nav.Link>
						<Nav.Link>Resume</Nav.Link>
						<Nav.Link>Contact</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;

import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./index.scss";
// import Navbar from "../Navbar";

const Header = () => {
	return (
		<header className="header">
			{/* <Container fluid>
				<Row>
					<Col sm xl="3" className="">
						<h1 className="logo text-center">AW</h1>
						<h3 className="name text-center">Ambrose Wilkinson</h3>
					</Col>
					<Col sm lg="8">
						<Navbar />
					</Col>
				</Row>
				<Row>
					<Col>Column 1</Col>
					<Col>Column 2</Col>
				</Row>
			</Container> */}

			<Navbar bg="light" expand="md" fixed="top">
				<Container>
					<Navbar.Brand href="#home">
						<h1 className="logo">AW</h1>
						<h3 className="name">Ambrose Wilkinson</h3>
					</Navbar.Brand>
					<Nav className="me-right">
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

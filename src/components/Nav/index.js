import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// import "./index.scss";

const Nav = (props) => {
	const { pages = [], currentPage, setCurrentPage } = props;

	// useEffect(() => {
	// 	document.title = currentPage.name;
	// }, [currentPage]);

	return (
		<Container className="header">
			<Row className="nav">
				<Col>
					<h1 className="text-center p-3">Ambrose Wilkinson</h1>
				</Col>
				<Col>
					<nav expand="md" sticky="top" className="p-4">
						<ul className="navlinks">
							<li>Contact</li>
							<li>Resume</li>
							<li>Projects</li>
						</ul>
					</nav>
				</Col>
			</Row>
		</Container>
	);
};

export default Nav;

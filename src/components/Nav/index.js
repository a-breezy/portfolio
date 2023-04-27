import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// import "./index.scss";

const Nav = (props) => {
	const { pages = [], currentPage, setCurrentPage } = props;

	// refer back to photo prt to mkae the title of the page change with every page selected
	// useEffect(() => {
	// 	document.title = currentPage.name;
	// }, [currentPage]);

	// also change the hero image to a different image for each page select

	return (
		<div id="hero">
			<Container className="header">
				<Row className="nav">
					<Col>
						<Link to="/" className="link">
							<h1 className="text-center p-3">Ambrose Wilkinson</h1>
						</Link>
					</Col>
					<Col>
						<nav expand="md" sticky="top" className="text-center p-4">
							<ul className="navlinks">
								<Link to="/contact" className="link">
									<li className="px-2">Contact</li>
								</Link>
								<Link to="/resume" className="link">
									<li className="px-2 ">Resume</li>
								</Link>
								<Link to="/projects" className="link">
									<li className="px-2 ">Projects</li>
								</Link>
							</ul>
						</nav>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Nav;

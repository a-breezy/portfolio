import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

let homeBanner = require("../../assets/img/homepage/home-banner.jpg");
let contactBanner = require("../../assets/img/homepage/contact-banner.jpg");
let resumeBanner = require("../../assets/img/homepage/resume-banner.jpg");

const Nav = (props) => {
	const { pages = [], currentPage, setCurrentPage } = props;
	const [banners] = useState([homeBanner, contactBanner, resumeBanner]);
	const [banner, setBanner] = useState(banners[0]);

	if (currentPage === "contact") {
		console.log(currentPage, banner);
		setBanner(1);
	} else if (currentPage === "resume") {
		console.log(banner);
		// setBanner(2);
	} else {
		console.log(banner);
		// setBanner(0);
	}

	// refer back to photo prt to mkae the title of the page change with every page selected
	// useEffect(() => {
	// 	document.title = currentPage;
	// }, [currentPage]);

	return (
		<div
			id="hero"
			style={{
				backgroundImage: `url(${banner})`,
			}}
		>
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

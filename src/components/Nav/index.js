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

	function handleClick(page) {
		setCurrentPage(page);
		if (currentPage === 1) {
			console.log(currentPage, banner);
			setBanner(1);
		} else if (currentPage === 2) {
			console.log(currentPage, banner);
			setBanner(2);
		} else {
			console.log(currentPage, banner);
			setBanner(0);
		}
	}

	useEffect(() => {
		// unable to set correct page
		console.log("pages", pages, "currentPage", currentPage, pages[currentPage]);
		if (currentPage === 0) {
			document.title = "Ambrose Wilkinson";
		} else {
			document.title = pages[currentPage];
		}
	}, [pages, currentPage]);

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
						<Link to="/" className="link" onClick={() => setCurrentPage(0)}>
							<h1 className="text-center p-3">Ambrose Wilkinson</h1>
						</Link>
					</Col>
					<Col>
						<nav expand="md" sticky="top" className="text-center p-4 d-flex">
							<div className="navlinks align-items-center">
								<Link
									to="/contact"
									className="link px-2"
									onClick={() => {
										setCurrentPage(1);
									}}
								>
									Contact
								</Link>
								<Link
									to="/resume"
									className="link px-2"
									onClick={() => setCurrentPage(2)}
								>
									Resume
								</Link>
								<Link
									to="/projects"
									className="link px-2"
									onClick={() => setCurrentPage(3)}
								>
									Projects
								</Link>
							</div>
						</nav>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Nav;

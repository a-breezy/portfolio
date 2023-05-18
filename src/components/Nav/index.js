import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

let homeBanner = require("../../assets/img/homepage/home-banner.jpg");
let contactBanner = require("../../assets/img/homepage/contact-banner.jpg");
let resumeBanner = require("../../assets/img/homepage/resume-banner.jpg");

const Nav = (props) => {
	const { pages = [], currentPage, setCurrentPage } = props;
	const [banners] = useState([
		homeBanner,
		contactBanner,
		resumeBanner,
		// projectBanner
	]);
	const [banner, setBanner] = useState(homeBanner);

	useEffect(() => {
		console.log("currentPage", currentPage, "banner", banner);
		if (currentPage === "Home") {
			document.title = "Ambrose Wilkinson";
			setBanner(homeBanner);
		} else {
			document.title = currentPage;
			if (currentPage === "Contact") {
				setBanner(contactBanner);
			}
			if (currentPage === "Resume") {
				setBanner(resumeBanner);
			}
			if (currentPage === "Projects") {
				// setBanner(projectBanner);
			}
		}
	}, [pages, currentPage, banner]);

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
							<h1
								className="text-center p-3"
								onClick={() => setCurrentPage(pages[0])}
							>
								Ambrose Wilkinson
							</h1>
						</Link>
					</Col>
					<Col>
						<nav expand="md" sticky="top" className="text-center p-4 d-flex">
							<div className="navlinks align-items-center">
								<Link
									to="/contact"
									className="link px-2"
									onClick={() => setCurrentPage(pages[1])}
								>
									Contact
								</Link>
								<Link
									to="/resume"
									className="link px-2"
									onClick={() => setCurrentPage(pages[2])}
								>
									Resume
								</Link>
								<Link
									to="/projects"
									className="link px-2"
									// onClick={() => setCurrentPage(pages[2])}
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

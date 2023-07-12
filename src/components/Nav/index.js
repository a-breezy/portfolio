import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

let homeBanner = require("../../assets/img/homepage/home-banner.jpg");
let contactBanner = require("../../assets/img/homepage/contact-banner.jpg");
let resumeBanner = require("../../assets/img/homepage/resume-banner.jpg");
let projectsBanner = require("../../assets/img/homepage/projects-banner.jpg");

const Nav = (props) => {
	const { pages = [], currentPage, setCurrentPage } = props;
	const [banner, setBanner] = useState(null);
	const [linkColor, setLinkColor] = useState(null);

	// console.log(
	// 	"initial banner state",
	// 	banner,
	// 	"checking initial page state",
	// 	currentPage
	// );

	// check sessionStorage for banner
	useEffect(() => {
		if (sessionStorage.getItem("banner")) {
			let bannerStore = sessionStorage.getItem("banner");
			// console.log("banner store", bannerStore);
			setBanner(bannerStore);
		}
	}, [setBanner]);

	useEffect(() => {
		if (currentPage === "Home") {
			document.title = "Ambrose Wilkinson";
			setBanner(homeBanner);
			setLinkColor(null);
			sessionStorage.setItem("banner", homeBanner);
		} else {
			document.title = currentPage;
			if (currentPage === "Contact") {
				setBanner(contactBanner);
				setLinkColor("color-link");
				sessionStorage.setItem("banner", contactBanner);
			}
			if (currentPage === "Resume") {
				setBanner(resumeBanner);
				setLinkColor(null);
				sessionStorage.setItem("banner", resumeBanner);
			}
			if (currentPage === "Projects") {
				setBanner(projectsBanner);
				setLinkColor("color-link");
				sessionStorage.setItem("banner", projectsBanner);
			}
		}
	}, [pages, currentPage, setBanner, banner, setLinkColor, linkColor]);

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
						<Link to="/" className={`${linkColor} link`}>
							<h1
								className="text-center p-3"
								onClick={() => setCurrentPage(pages[0])}
							>
								Ambrose Wilkinson
							</h1>
						</Link>
					</Col>
					<Col>
						<nav expand="md" sticky="top" className="text-center p-4">
							<div className="navlinks align-items-center">
								<Link
									to="/contact"
									className={`${linkColor} link px-2`}
									onClick={() => setCurrentPage(pages[1])}
								>
									Contact
								</Link>
								<Link
									to="/resume"
									className={`${linkColor} link px-2`}
									onClick={() => setCurrentPage(pages[2])}
								>
									Resume
								</Link>
								<Link
									to="/projects"
									className={`${linkColor} link px-2`}
									onClick={() => setCurrentPage(pages[3])}
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

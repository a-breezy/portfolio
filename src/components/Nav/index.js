import React, { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

// import "./index.scss";
// import Navbar from "../Navbar";

const Navagation = (props) => {
	const { pages = [], currentPage, setCurrentPage } = props;

	// useEffect(() => {
	// 	document.title = currentPage.name;
	// }, [currentPage]);

	return (
		<header id="nav" className="header">
			<Navbar expand="md" sticky="top">
				<Container>
					<Navbar.Brand className="nav logo" href="/">
						<h1>Ambrose Wilkinson</h1>
					</Navbar.Brand>
					<Nav className="navlinks nav">
						{pages.map((page, i) => (
							<Nav.Link
								className={`text-center ${currentPage.name === page.name}`}
								key={i}
							>
								<span
									onClick={() => {
										setCurrentPage(page);
									}}
								>
									{page.name}
								</span>
							</Nav.Link>
						))}
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};

export default Navagation;

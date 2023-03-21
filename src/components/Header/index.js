import React, { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

// import "./index.scss";
// import Navbar from "../Navbar";

const Header = (props) => {
	const { pages = [], currentPage, setCurrentPage } = props;

	// useEffect(() => {
	// 	document.title = currentPage.name;
	// }, [currentPage]);

	return (
		<header className="header">
			<Navbar expand="md" sticky="top">
				<Container>
					<Navbar.Brand href="/">
						<h1 className="logo">AW</h1>
						<h3 className="name">Ambrose Wilkinson</h3>
					</Navbar.Brand>
					<Nav className="navlinks">
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

export default Header;

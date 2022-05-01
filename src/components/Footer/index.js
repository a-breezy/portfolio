import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./index.scss";

const Footer = () => {
	return (
		<footer className="footer sticky-bottom">
			<Container fluid className="py-2">
				<Row>
					<Col sm className="mx-left text-center">
						<h6 className="copy">
							Ambrose.Wilkinson &copy;{new Date().getFullYear()}
						</h6>
					</Col>
					<Col sm className="me-right social">
						<Container>
							<Row className="align-items-center justify-content-center">
								<Col xs="auto" className="text-center">
									<a href="https://github.com/a-breezy">
										<i className="fa-brands fa-github-square fa-2x"></i>
									</a>
								</Col>
								<Col xs="auto" className="text-center">
									<a href="https://linkedin.com/in/ambrose-wilkinson/">
										<i className="fa-brands fa-linkedin fa-2x"></i>
									</a>
								</Col>
								<Col xs="auto" className="text-center">
									<a href="https://twitter.com/a_breezy64">
										<i className="fa-brands fa-twitter fa-2x"></i>
									</a>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// import "./index.scss";
// import "../../assets/img/photography";
import europePhotos from "../../assets/img/photography/europe-2019";

const PhotoPort = () => {
	return (
		<Container className="border border-3 border-dark">
			<h3 className="mt-2 text-center">Photography</h3>
			{/* Project 1: Let's Eat */}
			<Row className="py-3">
				<Col className="border border-4 w-100 m-1">
					<div>
						<img
							src={europePhotos.europe1}
							alt="UK tent"
							className="w-100 mx-0"
						></img>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default PhotoPort;

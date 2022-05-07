import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// import "./index.scss";
// import "../../assets/img/photography";
import europePhotos from "../../assets/img/photography/europe-2019";

const PhotoPort = () => {
	return (
		<Container className="mt-3 border border-3 border-dark h-100">
			<h2 className="mt-3 text-center">Photography</h2>
			{/* Project 1: Let's Eat */}
			<Row className="py-3 h-100">
				<Col>
					<div
						className="h-75"
						style={{
							backgroundImage: `url(${europePhotos.europe1})`,
							minHeight: "60vh",
							backgroundSize: "cover",
							backgroundPosition: "bottom center",
						}}
					>
						<h3 className="pt-2 text-center">Europe</h3>
						<p className="pt-5 text-center">Summer 2019.</p>
						<p className="pt-4 text-center">A Bliss Before the storm.</p>
						<p className="pt-3 text-center">From North to South</p>
						<p className="pt-2 text-center">And Back Again</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default PhotoPort;

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./index.scss";
import profile from "../../assets/img/profile.jpg";

const Hero = () => {
	// const handleClick = () => {
	//     setPage('page')
	// };

	return (
		<div className="about-section">
			<Container className="about-section-container">
				<Row className="py-3">
					<Col className="border border-2 profile-col">
						<h3 className="mt-2 text-center">A Bit About Me</h3>
						<p className="description">
							&ensp; Recently graduated from Columbia University Full Stack
							Coding Bootcamp and ready to start putting my newly acquired
							skills to the test.
							<br />
							&ensp; Interested in making things more efficient through code and
							growing my current MERN toolset through learning new things.
							Especially interersted in wearable tech and tracking daily
							activities to see correlations with other factors of life.
							<br />
							&ensp; A dedicated team-player willing to go the distance to make
							sure that work is evenly distributed and that the job gets done.
						</p>
					</Col>

					<Col className="border border-2">
						<img
							src={profile}
							className="profile-image my-2"
							style={{ width: "100%" }}
							alt="Profile"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Hero;

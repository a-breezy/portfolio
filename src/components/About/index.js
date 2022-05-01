import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./index.scss";
import profile from "../../assets/img/profile.jpg";

const About = () => {
	return (
		<Container className="about-section-container">
			<Row className="py-3">
				<Col md className="profile-col">
					<h3 className="pt-5 text-center">A Bit About Me</h3>
					<p className="pt-3">
						&emsp; MERN stack developer who recently graduated from Columbia
						University Full Stack Coding Bootcamp. Ready to put my newly
						acquired skills to the test with drive and dedication.
					</p>{" "}
					<p>
						&emsp; Interested in making things more efficient through code,
						learning new things and growing my toolset along the way.
						Particularly interested in wearable tech (such as{" "}
						<a href="https://ouraring.com/">Oura</a> and{" "}
						<a href="https://to.nutrisense.io/ns-cgm?utm_source=google&utm_medium=cpc&utm_campaign=comp_levels_exact_desktop_tcpa&utm_adgroup=levels&utm_keyword=levels&utm_adpos=&gclid=Cj0KCQjw37iTBhCWARIsACBt1Iz6O9JC0LfbYQBAahByx96jsm3DJAPecm-xe7RBiGj-IvUte3NNwucaAj3KEALw_wcB">
							Levels
						</a>
						), tracking daily activities and learning of correlations between
						life factors and wellbeing
					</p>
					<p>
						&emsp; A dedicated team-player willing to go the distance to make
						sure that work is evenly distributed and that the job gets done.
					</p>
				</Col>

				<Col md className="pt-3">
					<img
						src={profile}
						className="profile-image my-2"
						style={{ width: "100%" }}
						alt="Profile"
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default About;

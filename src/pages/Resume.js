import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import resumePdf from "../../assets/resume/a.wilkinson.resume.pdf";

const Resume = () => {
	return (
		<Container>
			<Row className="text-center resume-row py-4">
				<h3 className="pb-1 text-center">Resume</h3>
				<a href={resumePdf}>View or Download the PDF here</a>
			</Row>
			<Row className="resume-row mb-3 border border-3 rounded-3">
				<Col className="text-center mx-2">
					<h4 className="mb-2">Ambrose Wilkinson</h4>
					<p>
						<a href="mailto: ambrose.wilkins@gmail.com">
							ambrose.wilkins@gmail.com
						</a>{" "}
						<a href="tel:2074515536">207.451.5536</a>
						<br />
						New York, NY 10024 Portfolio:{" "}
						<a href="linkedin.com/in/ambrose-wilkinson">
							linkedin.com/in/ambrose-wilkinson
						</a>
						<br />
						GitHub: <a href="github.com/a-breezy">github.com/a-breezy</a> |
						LinkedIn:{" "}
						<a href="linkedin.com/in/ambrose-wilkinson">
							linkedin.com/in/ambrose-wilkinson
						</a>
					</p>
					<h6>Summary</h6>
					<p className="text-start">
						&ensp; Full-Stack Web Developer with keen interest in learning and
						developing on Web3 and Software Engineering. Recently received
						certificate in MERN stack development from Columbia University, Fu
						Foundation School of Engineering. A lifelong learner with past
						experience in Michelin-Starred New York City restaurants, which have
						led to a personable, friendly demeanor as well as leadership skills
						and quick thinking.
					</p>

					<h6>Technical Skills</h6>
					<p>
						Git, GitHub, HTML, CSS, JavaScript, Express.js, SQL, Node.js,
						MongoDB, Mongoose ODM, React.js, GraphQL, Apollo Graph Platform
					</p>

					<br />
					<h6>Projects</h6>
					<p className="text-start">
						<span>Let’s Eat</span> || Repo:{" "}
						<a href="github.com/a-breezy/LetsEat">
							github.com/a-breezy/LetsEat
						</a>{" "}
						|| Deployed:
						<a href="a-breezy.github.io/LetsEat/">
							a-breezy.github.io/LetsEat/
						</a>{" "}
						<br />
						&emsp;Restaurant randomizer to choose a restaurant for users based
						on their location using the Yelp API
						<ul>
							<li>
								Technologies: HTML, CSS, Bulma, JavaScript, jQuery, Pollyfill,
								Moment.js
							</li>
							<li>
								Role: Front-End JavaScript logic, led team discussions, and
								managed deadlines
							</li>
						</ul>
					</p>
					<p className="text-start">
						<span>Save the Steer</span> || Repo:{" "}
						<a href="github.com/a-breezy/save-the-steer">
							github.com/a-breezy/save-the-steer
						</a>{" "}
						|| Deployed:{" "}
						<a href="quiet-river-39422.herokuapp.com/">
							quiet-river-39422.herokuapp.com/
						</a>
						<br />
						&emsp;A progressive web app to track you budget regardless of
						internet connectivity
						<ul>
							<li>
								Technologies: JavaScript, Express.js, Node.js, MongoDB,
								Mongoose, compression, morgan
							</li>
							<li>
								Role: Created Back-End and refactored the code to make the app a
								PWA
							</li>
						</ul>
					</p>
					<p className="text-start">
						<span>Kitchen Sink</span> || Repo:{" "}
						<a href="github.com/antger78/kitchen_sink">
							github.com/antger78/kitchen_sink
						</a>{" "}
						|| Deployed:{" "}
						<a href="kitchen-sink.herokuapp.com/">
							kitchen-sink.herokuapp.com/
						</a>
						<br />
						&emsp; User generated recipe app to figure out what to cook when you
						need help cooking
						<ul>
							<li>
								Technologies: JavaScript, Express.js, Apollo/GraphQL, bcrypt,
								Bootstrap, React, React Bootstrap, JSON Web Token, React Router
							</li>
							<li>
								Role: Created Mongoose models, styled CSS, and facilitated group
								meetings
							</li>
						</ul>
					</p>

					<br />
					<h6>Experience</h6>
					<p className="text-start">
						<span>Contra:</span> New York City, USA &emsp;May 2021 - Mar 2022
						<br />
						Michelin-Starred: Bartender and Server
						<ul>
							<li>
								Composed cocktail list that highlighted the restaurant’s food
								menu as well as local, seasonal ingredients
							</li>
							<li>
								Dedicated to serving high-profile guests, creating a great
								experience, and being a team player
							</li>
						</ul>
					</p>
					<p className="text-start">
						<span>An Undefined Journey:</span> New York City, USA &emsp;Nov 2018
						– Sept 2021
						<br />
						Founder, Photographer, and Content Creator
						<ul>
							<li>
								Designed a minimalist portfolio and travel journal using
								Elementor
							</li>
							<li>
								Authored posts that included photography to paint a rich picture
								of what travel to certain places was like
							</li>
							<li>
								Improved social media following by posting daily, which
								increased viewership by 70%
							</li>
						</ul>
					</p>
					<p className="text-start">
						<span>Faro:</span> New York City, USA &emsp;Aug 2017 – Jan 2018
						<br />
						Michelin-Starred: Lead Server and Bartender
						<ul>
							<li>
								Contributed to the team by learning all front of house roles and
								filling in where needed
							</li>
							<li>
								Consistently upsold menu items and dining experiences to create
								a better experience for the patrons
							</li>
							<li>
								Partnered with the Chef to run an exclusive 8 seat, 8 course
								tasting menu twice a week
							</li>
						</ul>
					</p>

					<br />
					<h6>Education</h6>
					<p className="text-start">
						<span>Columbia Fu Foundation School of Engineering,</span>
						NYC, USA &emsp; Sept 2021 - Mar 2022
						<br />
						Certificate in MERN Full Stack Development
					</p>
					<p className="text-start">
						<span>CUNY Hunter College,</span>&emsp; NYC, USA &emsp;Jan 2012 -
						Jan 2016
						<br />
						Bachelor of Arts in Creative Writing and Sociology GPA: 3.7/4.0
						Graduated with Special Honors
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Resume;

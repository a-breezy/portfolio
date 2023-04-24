import React from "react";
import { Col } from "react-bootstrap";

const Project = ({ projects }) => {
	let { name, description, technologies, url, image } = projects;

	return (
		<>
			<h3 className="py-1 text-center">Projects</h3>

			<div className="py-2 project">
				<h4 className="text-center" key={name}>
					{name}
				</h4>
				<p>{description}</p>
				<h5 className="text-center">Technologies Used</h5>
				<ul className="technology-skills">
					{technologies.map((tech) => {
						return <li className='skill' key={tech}>{tech}</li>;
					})}
				</ul>
				<a href={url}>
					<img
						src={require(`../../assets/img/dev/${image}.png`)}
						className="project-image"
						alt={image}
						key={image}
					/>
				</a>
			</div>
		</>
	);
};

export default Project;

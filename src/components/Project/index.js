import React from "react";
// import { Col } from "react-bootstrap";

const Project = ({ projects }) => {
	let proj = projects;

	return (
		<>
			<h3 className="py-1 text-center">Projects</h3>
			{/* This map feature can be reused in another page which renders more than one project */}
			{/* {projects.map((proj) => { 
			return ( */}
			<div className="py-2 project">
				<h4 className="text-center" key={proj.name}>
					{proj.name}
				</h4>
				<p>{proj.description}</p>
				<h5 className="text-center">Technologies Used</h5>
				<ul>
					{proj.technologies.map((tech) => {
						return <li key={tech}>{tech}</li>;
					})}
				</ul>
				<a href={proj.url}>
					<img
						src={require(`../../assets/img/dev/${proj.image}.png`)}
						alt={proj.image}
						key={proj.image}
					/>
				</a>
			</div>
			{/* );
			})} */}
		</>
	);
};

export default Project;

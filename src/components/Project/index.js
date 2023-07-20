import React from "react";

const Project = ({ projects }) => {
	let { name, description, technologies, url, github, image } = projects;

	return (
		<>
			<div className="project">
				<h3 className="text-center" key={name}>
					{name}
				</h3>
				<p>{description}</p>
				<h4 className="text-center">Technologies Used</h4>
				<ul className="technology-skills">
					{technologies.map((tech) => {
						return (
							<li className="skill" key={tech}>
								{tech}
							</li>
						);
					})}
				</ul>
				<h4>Check it out on <a href={github}>GitHub</a></h4>
				
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

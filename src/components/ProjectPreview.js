import React from 'react';

const ProjectPreview = (props) => {
  const { project } = props;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="container cardContainer">
        <h4 className="content-cont2 text-title-cont">{project.title}</h4>
        <img
          className="img-fluid center-block"
          src={project.imageURL}
          alt="img"
        />
        <div className="content-cont">{project.description}</div>
        <div className="container">
          <div className="row" />
          <a
            type="button"
            href={project.github}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-dark btn-sm"
          >
            View Code
          </a>
          {project.projectLink ? (
            <a
              type="button"
              href={project.projectLink}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-light btn-sm float-right"
            >
              Live Version
            </a>
          ) : (
            <div />
          )}
        </div>

        <div className="badges">
          {project.tech.map((tech) => (
            <span className="badge badge-danger">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;

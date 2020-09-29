import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectPreview from '../components/ProjectPreview';

const mapStateToProps = (state) => {
  return {
    projectList: state.projects,
  };
};

const Projects = (props) => {
  const { projectList } = props;
  return (
    <nav className="fullwidth" id="Projects">
      <div className="container ">
        <div className="row justify-content-center">
          <h3 className="infoTitile4 mrg-top mrg-bootm2">My projects</h3>
        </div>
        <div className="row highContainer">
          {projectList.map((project) => (
            <ProjectPreview project={project} />
          ))}
        </div>
      </div>
    </nav>
  );
};

Projects.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.object),
};

Projects.defaultProps = {
  projectList: [],
};

export default connect(mapStateToProps, null)(Projects);

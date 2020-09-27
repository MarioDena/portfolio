import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navlinks from '../components/NavLinks';
import foto from '../assets/Foto.jpg';

const mapStateToProps = (state) => {
  return {
    links: state.links,
  };
};

const Projects = (props) => {
  const { projectList } = props;
  return (
    <nav className="fullwidth">
      <div className="container">
        {projectList.map((project) => (
          <Project project={project} />
        ))}
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

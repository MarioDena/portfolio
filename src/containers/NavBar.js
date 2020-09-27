/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navlinks from '../components/NavLinks';

const mapStateToProps = (state) => {
  return {
    links: state.links,
  };
};

const NavBar = (props) => {
  const { links } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand text-warning md-title mr-auto" href="#">
          MD
        </a>
        <div className="nav-item">
          <Navlinks links={links} />
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

NavBar.defaultProps = {
  links: [],
};

export default connect(mapStateToProps, null)(NavBar);

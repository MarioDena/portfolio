/* eslint-disable jsx-a11y/anchor-is-valid */
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

const NavBar = (props) => {
  const { links } = props;
  return (
    <nav className="navbar navbar-light bg-light sticky">
      <div className="container">
        <img
          className="navbar-brand fotoMain md-title mr-auto"
          src={foto}
          alt="foto"
        />
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

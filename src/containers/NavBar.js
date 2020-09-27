/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Navlinks from '../components/NavLinks';

const NavBar = (props) => {
    const links = [
        { ref: '#', name: 'Index' },
        { ref: '#', name: 'Projects' },
        { ref: '#', name: 'Contact' },
      ];
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand md-title mr-auto" href="#">
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
  books: PropTypes.arrayOf(PropTypes.object),
  deleteBook: PropTypes.func,
};

NavBar.defaultProps = {
  books: [],
  deleteBook: null,
};

export default NavBar;

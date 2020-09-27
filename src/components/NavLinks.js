import React from 'react';
import PropTypes from 'prop-types';

const NavLinks = (props) => {
  const { links } = props;
  return (
    <div className="row">
      {links.map((link) => (
        <a className="main-Link" href={link.ref}>
          <div className="col-md-4">{`./${link.name}`}</div>
        </a>
      ))}
    </div>
  );
};

NavLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

NavLinks.defaultProps = {
  links: [],
};

export default NavLinks;

/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const NavLinks = (props) => {
  const { links } = props;
  const handleClick = (e) => {
    document.getElementById(e.currentTarget.name).scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className="row">
      {links.map((link) => (
        <a
          type="button"
          name={link.ref}
          role="button"
          className="main-Link"
          onClick={handleClick.bind(this)}
        >
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

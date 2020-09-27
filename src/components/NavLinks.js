import React from 'react';
import PropTypes from 'prop-types';

const NavLinks = (props) => {
  const { links } = props;
  return (
    <div>
      {links.map((link) => (
        <a href={link.ref}>{link.name}</a>
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

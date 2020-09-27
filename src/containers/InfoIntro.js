/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import InfoLinks from '../components/InfoLinks';

const InfoIntro = (props) => {
  const { info } = props;
  return (
    <div className="container">
      <div className="row centeredInfo">
        <h3 className="dinamicTitle infoTitile">&nbsp;</h3>
      </div>
      <div className="row">
        <h3 className="infoTitile">{info.title}</h3>
        <p className="infoInfo">{info.content}</p>
        <InfoLinks />
      </div>
    </div>
  );
};

InfoIntro.propTypes = {
  info: PropTypes.object,
};

InfoIntro.defaultProps = {
  info: {},
};

export default InfoIntro;

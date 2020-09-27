import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfoIntro from '../components/InfoIntro';
import InfoSVG from '../components/InfoSVG';

const mapStateToProps = (state) => {
  return {
    info: state.info,
  };
};

const InfoMain = (props) => {
  const { info } = props;
  return (
    <div className="container">
      <div className="row highContainer">
        <div className="col-md d-flex justify-content-center">
          <InfoIntro info={info} />
        </div>
        <div className="infoSVG col-md-5 justify-content-center">
          <InfoSVG />
        </div>
      </div>
    </div>
  );
};

InfoMain.propTypes = {
  info: PropTypes.object,
};

InfoMain.defaultProps = {
  info: {},
};

export default connect(mapStateToProps, null)(InfoMain);

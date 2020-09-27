import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfoIntro from './InfoIntro';
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
      <div className="row highContainer2">
        <div className="col-md d-flex">
          <InfoIntro info={info} />
        </div>
        <div className="infoSVG col-md-5 ">
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

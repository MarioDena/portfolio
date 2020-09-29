import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfoIntro from './InfoIntro';

const mapStateToProps = (state) => {
  return {
    info: state.info,
  };
};

const InfoMain = (props) => {
  const { info } = props;
  return (
    <div className="container" id="Index">
      <div className="row highContainer2">
        <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 d-flex">
          <InfoIntro info={info} />
        </div>
        <div className="infoSVG ">
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

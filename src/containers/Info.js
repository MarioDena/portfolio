import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    info: state.links,
  };
};

const InfoMain = (props) => {
  const { info } = props;
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-md-7">wdqwqdwqdqwdqwd</div>
          <div className="col-md-5">qwdqwdqwdqwdqwd</div>
        </div>
      </div>
    </div>
  );
};

InfoMain.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

InfoMain.defaultProps = {
  links: [],
};

export default connect(mapStateToProps, null)(InfoMain);

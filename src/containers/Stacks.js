import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Curriculum from '../components/Curriculum';
import StackList from '../components/StackList';

const mapStateToProps = (state) => {
  return {
    info: state.info,
  };
};

const Stacks = (props) => {
  const { info } = props;
  return (
    <div className="container" id="About">
      <div className="row highContainer2">
        <div className="col-md d-flex">
          <Curriculum info={info} />
        </div>
        <div className="col">
          <StackList />
        </div>
      </div>
    </div>
  );
};

Stacks.propTypes = {
  info: PropTypes.object,
};

Stacks.defaultProps = {
  info: {},
};

export default connect(mapStateToProps, null)(Stacks);

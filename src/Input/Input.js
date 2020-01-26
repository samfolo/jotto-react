import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
  render() {
    return (
      <div data-test='component-input' >
        <button />
      </div>
    )
  }
};

const mapStateToProps = (state, action) => {
  return {

  }
};

const mapDispatchToProps = (dispatch, action) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Input)
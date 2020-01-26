import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input 
          type='text' 
          data-test='input-box' 
          className='mb-2 mx-sm-3' 
          placeholder='enter guess' />
        <button 
          type='submit' 
          data-test='submit-button' 
          className='btn btn-primary mb-2'>Submit</button>
      </form>
    );

    return (
      <div data-test='component-input' >
        {contents}
      </div>
    )
  }
};

const mapStateToProps = ({ success }) => {
  return {
    success,
  }
};

const mapDispatchToProps = (dispatch, action) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Input)
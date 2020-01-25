import React from 'react';
import Classes from './Congrats.module.css';
import PropTypes from 'prop-types';

class Congrats extends React.Component {
  state = {

  }

  render() {
    let content = null;
    if (this.props.success) content = 'Congratulations, you guessed the word!';

    return (
      <div className={Classes.Congrats} data-test='component-congrats' className='alert alert-success'>
        <div data-test='congrats-message'>{content}</div>
      </div>
    );
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats;

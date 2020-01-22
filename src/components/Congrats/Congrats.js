import React from 'react';
import Classes from './Congrats.module.css';

class Congrats extends React.Component {
  state = {

  }

  render() {
    let content = null;
    if (this.props.success) content = 'Congratulations, you guessed the word!';

    return (
      <div className={Classes.Congrats} data-test='component-congrats'>
        <div data-test='congrats-message'>{content}</div>
      </div>
    );
  }
}

export default Congrats;

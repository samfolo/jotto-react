import React from 'react';
import Classes from './Congrats.module.css';

class Congrats extends React.Component {
  render() {
    return (
      <div className={Classes.Congrats} data-test='component-congrats'>
      </div>
    );
  }
}

export default Congrats;

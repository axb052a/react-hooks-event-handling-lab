import React, { Component } from 'react';

class Keypad extends Component {
  handleInputChange = (event) => {
    console.log('Entering password...');
  };

  render() {
    return (
      <div>
        <input type="password" onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default Keypad;

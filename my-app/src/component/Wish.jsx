import React from 'react';
class Car extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color: "red", year: "2018"};
  }
  render() {
    return (<h2>I am a {this.props.color}{this.state.year} {this.props.name}!</h2>);
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}
export {Car}
export {Garage}
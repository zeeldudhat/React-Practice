import React from "react";
class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favcolor: "red" };
  }
  getDerivedStateFromProps(props, state) {
    return { favcolor: props.favcolor };
  }
//   shouldComponentUpdate() {
//     return false;
//   }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favcolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
  changeColor = () => {
    this.setState({ favcolor: this.props.favcolor});
  };
}
export default Update;

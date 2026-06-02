import React from "react";
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textColor: "red" };
  }
  getDerivedStateFromProps(props, state) {
    return { textColor: props.textColor };
  }
  componentDidMount() {
    setTimeout(() => {this.setState({ textColor: this.props.textColor })}, 1000);
  }
  render() {
    return (
      <>
        {/* <p>My Favorite Color is {this.props.textColor}</p> */}
        <p>My Favorite Color is {this.state.textColor}</p>
      </>
    );
  }
}
export default LifeCycle;

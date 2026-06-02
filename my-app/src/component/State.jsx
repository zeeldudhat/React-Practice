import React from "react";
import LifeCycle from "./LifeCycle";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
    this.event = () => {
      this.setState({ color: "blue" });
    };
  }
  render() {
    return (
      <button
        style={{
          backgroundColor: this.state.color,
          border: "none",
          color: "white",
          height: "40px",
          width: "100px",
        }}
        onClick={this.event}
      >
        Click Me
      </button>
    );
  }
}
export default Button;

import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: "01",
    };

    console.log("Constructor");
    console.log("props:", props);
    console.log("state:", this.state);
  }

  // Sync state with props
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps",props,state);

    if (props.stage !== state.step) {
      return {
        step: props.stage,
      };
    }

    return null;
  }

  // After component mounts
  componentDidMount() {
    console.log("componentDidMount");

    // Example state update
    setTimeout(() => {
      this.setState({
        step: "02",
      });
    }, 2000);
  }

  // Decide whether component should update
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");

    return true;
  }

  // Before DOM update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");

    return {
      previousStep: prevState.step,
    };
  }

  // After update
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");

    console.log("Previous Props:", prevProps);
    console.log("Previous State:", prevState);
    console.log("Snapshot:", snapshot);
  }

  // Before component removes
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Render");

    return (
      <>
        <h1>React Lifecycle Demo</h1>
        <p>Current Step: {this.state.step}</p>
      </>
    );
  }
}

export default LifeCycle;
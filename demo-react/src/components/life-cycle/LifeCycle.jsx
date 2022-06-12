import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor is called");
  }

  componentDidMount() {
    console.log("componnet did mount");
  }

  shouldComponentUpdate() {
    console.log("component will update");
    return true;
  }

  componentDidUpdate() {
    console.log("component is updated");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  state = {
    buttonClick: false,
    redirectToGame: false,
  };

  redirectToGame() {
    this.setState({
      redirectToGame: true,
    });
  }

  clickBtn = () => {
    this.setState({
      buttonClick: !this.state.buttonClick,
    });
  };

  render() {
    console.log("render is called");
    return (
      <div>
        Test life cycle
        {this.state.redirectToGame ? <Redirect to="/tic-tac-toe" /> : null}
        <button
          className="btn"
          onClick={() => this.redirectToGame()}
          style={{ color: this.state.buttonClick ? "red" : "black" }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default LifeCycle;

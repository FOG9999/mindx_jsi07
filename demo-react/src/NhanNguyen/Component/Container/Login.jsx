import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../Share/Header";
import Footer from "../Share/Footer";

class Login extends Component {
  state = {
    username: "",
    password: "",
    confirmpass: "",
    redirect: false,
  };
  onChangeInput = (e) => {
    //key: e.target.name
    this.setState({ [e.target.name]: e.target.value });
  };

  checkSignin = () => {
    if (this.state.username === this.state.password) {
      this.setState({ redirect: true });
    }
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.redirect ? <Redirect to={"/homepage"} /> : null}
        <div className="flex flex-col items-center justify-center login bg-blue-200 box-border rounded-xl shadow-xl border-2 w-2/3 mt-16 mx-80">
          <h1 className="mb-14 text-5xl font-bold text-red-700 mt-5">Log In</h1>
          <div className="flex flex-col">
            <input
              className="pr-72 pl-10 rounded-xl mb-6 py-2"
              name="username"
              type="text"
              placeholder="User name"
            />
            <input
              className="pr-72 pl-10 rounded-xl mb-10 py-2"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            onClick={this.checkLogin()}
            className="text-white px-20 py-1 box-border bg-red-500 rounded-xl mb-3"
            name="btn"
          >
            Log In
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;

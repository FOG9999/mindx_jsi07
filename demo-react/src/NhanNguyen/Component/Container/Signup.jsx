import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Footer from "../Share/Footer";
import Header from "../Share/Header";

class Signup extends Component {
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
    if (this.state.password === this.state.confirmpass) {
      this.setState({ redirect: true });
    }
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.redirect ? <Redirect to={"/login"} /> : null}
        <div className="flex flex-col items-center justify-center login bg-blue-200 box-border rounded-xl shadow-xl border-2 w-2/3 mt-16 mx-80">
          <h1 className="mb-14 text-5xl font-bold text-red-700 mt-5">
            Sign Up
          </h1>
          <div className="flex flex-col">
            <input
              className="pr-72 pl-10 rounded-xl mb-6 py-2"
              name="username"
              type="text"
              placeholder="User name"
              value={this.state.username}
              onChange={this.onChangeInput}
            />
            <input
              className="pr-72 pl-10 rounded-xl mb-6 py-2"
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChangeInput}
            />
            <input
              className="pr-72 pl-10 rounded-xl mb-10 py-2"
              name="confirmpass"
              type="password"
              placeholder="Confirm Password"
              value={this.state.confirmpass}
              onChange={this.onChangeInput}
            />
          </div>
          <button
            onClick={this.checkSignin}
            className="text-white px-20 py-1 box-border bg-red-500 rounded-xl mb-3"
            name="btn"
          >
            Sign Up
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;

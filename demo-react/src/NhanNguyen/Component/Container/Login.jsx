import React, { Component } from "react";
import Header from "../Share/Header";
import Footer from "../Share/Footer";

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="flex flex-col items-center justify-center login bg-blue-200 box-border rounded-xl shadow-xl border-2">
          <h1 className="mb-14 text-5xl font-bold text-red-700">Log In</h1>
          <div className="flex flex-col">
            <input
              className="pr-72 pl-10 rounded-xl mb-6 py-2"
              id="UsNa"
              type="text"
              placeholder="User name"
            />
            <input
              className="pr-72 pl-10 rounded-xl mb-10 py-2"
              id="Pass"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="text-white px-20 py-1 box-border bg-red-500 rounded-xl"
            id="btn"
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

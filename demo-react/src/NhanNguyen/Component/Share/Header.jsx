import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="h-20 box-border bg-gray-200 flex flex-row items-center justify-items-center text-center text-red-900">
        <div class="px-20 py-2">
          <a href="index.html">
            <img
              className="w-100 h-16"
              src="https://www.gearinc.com/wp-content/uploads/2020/01/gear_logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="">
          <ul className="py-5 flex flex-row text-xl">
            <a href="/HTML/laptop.html">
              <li className="px-8">Laptop</li>
            </a>
            <a href="">
              <li className="px-8">Mouse</li>
            </a>
            <a href="">
              <li className="px-8">Keyboard</li>
            </a>
            <a href="">
              <li className="px-8">Headphone</li>
            </a>
          </ul>
        </div>
        <div className="py-5 box-border flex flex-wrap">
          <input
            className="py-1 pr-40 pl-5 ml-10 box-border rounded-lg"
            type="text"
            placeholder="Search for items"
          />
          <button className="w-8 h-8">
            <img
              className="rounded-lg"
              src="data:image/png;base64,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
                FnVDNdiA1Btov3w6N/iO/i+B50IaIrEHhXLHrBCho9jO9IyAD6g82pqcF+l3m/scLw+r5/b+fPwcHBwcHBwcHBwcHBPP4BDldkrp1piIAAAAAASUVORK5CYII="
              alt=""
            />
          </button>
        </div>
        <div className="flex flex-row py-5 px-20 text-xl">
          <div className="flex flex-row mr-10">
            <img
              className="w-8 h-8 mr-2"
              src="https://theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=23459"
              alt=""
            />
            <a href="signin.html">
              <h2 className="mr-10">Sign In</h2>
            </a>
          </div>
          <div className="flex flex-row">
            <img
              className="w-8 h-8 mr-2"
              src="https://theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=23459"
              alt=""
            />
            <a href="login.html">
              <h2>Log In</h2>
            </a>
          </div>
        </div>
        <div className="py-4 place-self-end">
          <a href="cart.html">
            <img
              className="w-8 h-8"
              src="https://theme.hstatic.net/1000026716/1000440777/14/ak5.png?v=23459"
              alt=""
            />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;

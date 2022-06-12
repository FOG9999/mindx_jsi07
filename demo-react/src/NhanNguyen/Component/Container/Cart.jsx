import React, { Component } from "react";
import Footer from "../Share/Footer";
import Header from "../Share/Header";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div
          className="my-20 mx-20 flex flex-row grid grid-flow-col gap-4 grid-rows-2"
          id="items"
        >
          <div className="box-border rounded-xl shadow-xl h-64 border-2 flex flex-row items-center">
            <a href="item.html">
              <img
                className="ml-16 w-60 h-48"
                src="https://product.hstatic.net/1000233206/product/asus-rog-strix-g15-g513ih-hn015t_49155e9c7128456d9758b0c7b32ce636_large.png"
                alt=""
              />
            </a>
            <div className="flex flex-row justify-between">
              <div className="ml-5 w-72">
                <p>Laptop Gaming Asus ROG Strix G15 G513IC HN002</p>
                <p>Price: 21.000.000 VND</p>
              </div>
            </div>
            <div className="md:flex md:flex-wrap flex flex-row">
              <div>
                <h1>Quantity</h1>
                <select className="appearance-none w-12 h-10 border-2 rounded-lg">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold text-2xl flex justify-end mr-20">
          <h1>Total: ... VND</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cart;

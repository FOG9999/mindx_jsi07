import React, { Component } from "react";
import Footer from "../Share/Footer";
import Header from "../Share/Header";

const ItemsAPI =
  "https://621224f301ccdac074332fd3.mockapi.io/api/v1/items/Items";

class Item extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    this.getItemFromAPIUrl(ItemsAPI);
  }

  getItemFromAPIUrl = (APIUrl) => {
    let productId = this.props.match.params.id;
    fetch(`${APIUrl}/${productId}`)
      .then(function (res) {
        if (res.ok === true) {
          return res.json();
        } else {
          throw new Error(
            "Hệ thống đang xảy ra vấn đề, vui lòng truy cập lại sau"
          );
        }
      })
      .then(function (data) {
        console.log(data);
        const { Image, Name, Price } = data;
        data.Image = Image;
        data.Name = Name;
        data.Price = `${Price}`;
      })
      .catch(function (error) {
        alert("error");
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32">
          <div className="lg:flex -mx-6">
            <div className="mb-8 px-6 md:mb-0 lg:w-1/2">
              <div className="w-full overflow-hidden relative bg-gainsboro rounded-lg">
                <div
                  style={{
                    display: "inline-block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      id="img"
                      alt=""
                      aria-hidden="true"
                      role="presentation"
                      src="https://product.hstatic.net/1000233206/product/asus-rog-strix-g15-g513ih-hn015t_49155e9c7128456d9758b0c7b32ce636_large.png"
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        margin: "0px",
                        border: "none",
                        padding: "0px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 md:py-3 lg:w-1/2">
              <h1
                className="font-bold text-3xl md:text-6xl mb-3 leading-tight text-black"
                id="name"
              >
                Laptop Gaming Asus ROG Strix G15 G513IC HN002
              </h1>
              <div className="mb-6">
                <p className="font-semibold text-2xl text-slategray" id="pay">
                  Price: 21.000.000 VND
                </p>
              </div>
              <div className="mb-6">
                <p className="leading-loose text-lightgray">
                  Asus ROG Strix G15 G513IH HN015W was born to bring moments of
                  sublimation for users to fully immerse themselves in their
                  favorite games.
                </p>
              </div>
              <div className="md:flex md:flex-wrap -mx-3">
                <div className="md:w-1/4 px-3 mb-6">
                  <label
                    className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray"
                    for="quantity"
                  >
                    Quantity
                  </label>
                  <div className="relative">
                    <select
                      id="quantity"
                      name="quantity"
                      className="block appearance-none w-full bg-gainsboro border-2 border-gainsboro focus:border-slategray px-4 py-3 pr-8 focus:outline-none focus:bg-white text-slategray focus:text-slategray rounded-lg"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-gray-400"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-pink-500 hover:bg-red-500 px-4 py-3 rounded-lg text-white text-sm font-bold tracking-widest uppercase focus:outline-none">
                Add to cart
              </button>
              <div className="pt-4">
                <div className="divide-y-2 space-y-4">
                  <div className="first:pt-0 pt-4 space-y-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Item;

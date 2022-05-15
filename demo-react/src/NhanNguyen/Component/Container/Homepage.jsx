import React, { Component } from "react";
import Header from "../Share/Header";

const ItemsAPI =
  "https://621224f301ccdac074332fd3.mockapi.io/api/v1/items/Items";

class Homepage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.getItemFromAPIUrl(ItemsAPI);
  }

  getItemFromAPIUrl = (APIUrl) => {
    fetch(APIUrl)
      .then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(
            "Hệ thống đang xảy ra vấn đề, vui lòng truy cập lại sau"
          );
        }
      })
      .then((data) => {
        this.setState({
          items: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  renderItemOnPage = () => {
    return this.state.items.map((item, index) => {
      return (
        <div class="box-border rounded-xl shadow-xl w-96 h-64 border-2">
          <a href="/HTML/item.html">
            <img class="ml-16 w-60 h-40" src={item.Image} alt="" />
          </a>
          <div class="flex flex-row justify-between">
            <div class="ml-5 w-72">
              <p>{item.Name}</p>
              <p>Price: {item.Price} VND</p>
            </div>
            <div>
              <button>
                <img
                  class="w-14 h-14"
                  src="https://static.thenounproject.com/png/3557455-200.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="ml-20 mt-18 flex flex-row grid grid-flow-col gap-4 grid-rows-2 pt-20">
          {this.renderItemOnPage()}
        </div>
      </div>
    );
  }
}

export default Homepage;

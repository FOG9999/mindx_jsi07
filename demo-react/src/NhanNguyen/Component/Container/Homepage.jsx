import React, { Component } from "react";
import Footer from "../Share/Footer";
import Header from "../Share/Header";
import { Link } from "react-router-dom";

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
        <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
          <div
            className="border"
            style={{ minHeight: "250px", maxHeight: "500px", height: "90%" }}
          >
            <Link to={`/item/${item.id}`}>
              <img
                className="m-auto"
                style={{ width: "60%", height: "75%" }}
                src={item.Image}
                alt=""
              />
            </Link>
            <div className="flex flex-row justify-between">
              <div className="ml-5 w-72">
                <p>{item.Name}</p>
                <p>Price: {item.Price} VND</p>
              </div>
              <div>
                <button className="border-none">
                  <img
                    className="w-10 h-10 mr-2 border-none"
                    src="https://cdn-icons-png.flaticon.com/512/1250/1250544.png?"
                    alt=""
                  />
                </button>
              </div>
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
        <div className="row my-3 mx-3" style={{ minHeight: "700px" }}>
          {this.renderItemOnPage()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;

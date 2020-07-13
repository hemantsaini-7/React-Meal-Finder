import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
      err: "",
    };
  }

  /*searchMeal = async (text) => {
    const res = await Axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    );
    this.setState({ meals: res.data.meals });
  };*/

  searchMeal = async (text) => {
    const res = await Axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    ).then((res) => {
      this.setState({ meals: res.data.meals }).catch((err) => {
        this.setState({ err: "Something went wrong..!!" });
      });
    });
  };

  render() {
    return (
      <div>
        <Header searchMeal={this.searchMeal} />
        <Content meals={this.state.meals} />
      </div>
    );
  }
}

export default App;

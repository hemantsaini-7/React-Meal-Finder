import React, { Component } from "react";
import "./../Styles/content.css";
import axios from "axios";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
      err: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => {
        console.log(res.data);
        this.setState({
          meals: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          err: "Something went wrong..!!",
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.meals.map((meal) => (
          <div key={meal.id}>{meal.strMeal}</div>
        ))}
      </div>
    );
  }
}
export default Content;

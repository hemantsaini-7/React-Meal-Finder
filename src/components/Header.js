import React, { Component } from "react";
import "./../Styles/header.css";

class header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: " ",
    };
  }

  onClick = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchMeal(this.state.text);
  };

  render() {
    return (
      <div className='header'>
        <h1 className='heading'>Meal Finder</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Search The Meal..!!'
            className='search-field'
            value={this.state.text}
            onChange={this.onClick}
          />
          <input type='submit' value='Search' className='search-btn' />
        </form>
      </div>
    );
  }
}

export default header;

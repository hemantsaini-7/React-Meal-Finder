import React, { Component } from "react";
import "./../Styles/header.css";

class header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: " ",
    };
  }

  clickHandle = () => {
    this.setState({});
  };

  render() {
    return (
      <div className='header'>
        <h1 className='heading'>Meal Finder</h1>
        <form>
          <input
            type='text'
            placeholder='Search The Meal..!!'
            className='search-field'
            value={this.state.text}
            onChange={this.clickHandle}
          />
          <input type='submit' value='Search' className='search-btn' />
        </form>
      </div>
    );
  }
}

export default header;

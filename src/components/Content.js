import React, { Component } from "react";
import "./../Styles/content.css";

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <ul className='items'>
          <li className='item'>
            <h1>Heading</h1>
            <p> Bout item</p>
          </li>
          <li className='item'>
            <h1>Heading</h1>
            <p> Bout item</p>
          </li>
          <li className='item'>
            <h1>Heading</h1>
            <p> Bout item</p>
          </li>
          <li className='item'>
            <h1>Heading</h1>
            <p> Bout item</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Content;

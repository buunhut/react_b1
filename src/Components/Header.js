import React, { Component } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="headerContent">
            <div className="logo">
              <a href="#">Start Boostrap</a>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

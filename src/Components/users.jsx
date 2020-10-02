import React, { Component } from "react";
require("dotenv").config();

export default class Users extends Component {
  render() {
    return (
      <div>
        <table className="ui single line table">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{username}</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

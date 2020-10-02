import React from "react";

import axios from "axios";

export default class Users extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <table class="ui celled table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Name">{person.name}</td>
                <td data-label="Age">{person.email}</td>
                <td data-label="Job">{person.username}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </ul>
    );
  }
}

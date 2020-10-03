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
      <table className="ui green table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <>
          {this.state.persons.map((person) => (
            <React.Fragment key={person.id}>
              <tbody>
                <tr>
                  <td data-label="Name">{person.name}</td>
                  <td data-label="Age">{person.email}</td>
                  <td data-label="Job">{person.username}</td>
                  <td data-label="website">{person.website}</td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
        </>
      </table>
    );
  }
}

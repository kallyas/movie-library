import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .then(({ results: items }) => this.setState({ items }));
  };
  render() {
    let items = this.state.items;
    return (
      <div>
        {items.map((item) => (
          <h4>{item.name}</h4>
        ))}
      </div>
    );
  }
}

export default App;

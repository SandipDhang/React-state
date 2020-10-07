import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      title: "SD Creation",
      work: "Like, Share & Subscribe",
    };
  }
  render() {
    return (
      <center>
        <h1>{this.state.title}</h1>
        <h1>{this.state.work}</h1>
      </center>
    );
  }
}

export default Home;

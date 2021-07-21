import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: null,
    };
  }

  submitReservation = (event) => {};

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="date"
          name="date"
          value={this.state.date}
        />
        <input
          type="text"
          placeholder="time"
          name="time"
          value={this.state.time}
        />
        <input
          type="text"
          placeholder="number of guests"
          name="number"
          value={this.state.number}
        />
        <button className="submit-button">SUBMIT</button>
      </form>
    );
  }
}

export default Form;

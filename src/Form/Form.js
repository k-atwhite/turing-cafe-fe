import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: "",
    };
  }

  captureReservation = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitReservation = (event) => {
    event.preventDefault();
    const newReservation = {
      ...this.state,
    };
    this.props.addReservation(newReservation);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({ name: "", date: "", time: "", number: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={(event) => this.captureReservation(event)}
        />
        <input
          type="text"
          placeholder="date"
          name="date"
          value={this.state.date}
          onChange={(event) => this.captureReservation(event)}
        />
        <input
          type="text"
          placeholder="time"
          name="time"
          value={this.state.time}
          onChange={(event) => this.captureReservation(event)}
        />
        <input
          type="text"
          placeholder="number of guests"
          name="number"
          value={this.state.number}
          onChange={(event) => this.captureReservation(event)}
        />
        <button
          className="submit-button"
          onClick={(event) => this.submitReservation(event)}
        >
          make reservation
        </button>
      </form>
    );
  }
}

export default Form;

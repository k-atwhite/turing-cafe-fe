import React, { Component } from "react";
import "./App.css";
import Reservations from "../Reservations/Reservations";
import { getAllReservations } from "../apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount() {
    getAllReservations().then((reservations) =>
      this.setState({ reservations: reservations })
    );
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="reservation-form"></div>
        <Reservations reservations={this.state.reservations} />
      </div>
    );
  }
}

export default App;

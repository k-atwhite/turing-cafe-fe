import React, { Component } from "react";
import "./App.css";
import Reservations from "../Reservations/Reservations";
import { getAllReservations } from "../apiCalls";
import Form from "../Form/Form";

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

  addReservation = (newReservation) => {
    this.setState({
      reservations: [...this.state.reservations, newReservation],
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="reservation-form">
          <Form addReservation={this.addReservation} />
        </div>
        <Reservations reservations={this.state.reservations} />
      </div>
    );
  }
}

export default App;

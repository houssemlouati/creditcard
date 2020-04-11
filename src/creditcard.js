import React, { Component } from "react";
import "./creditcard.css";
import Affiche from "./affiche.js";
class CreditCard extends Component {
  state = {
    holdername: "",
    cardnumber: "",
    validity: "",
    setNumber: "•••• •••• •••• ••••",
    setMMYY: "••/••",
  };

  handleChangeName = (event) => {
    this.setState({ holdername: event.target.value });
  };
  handleCardNumber = (event) => {
    this.setState({ cardnumber: event.target.value });
  };
  handleChangeValidity = (event) => {
    this.setState({ validity: event.target.value });
  };

  nameCon = () => {
    this.setState({ holdername: this.state.holdername.slice(0, 19) });
  };
  numCon = () => {
    setInterval(() =>
      this.setState({
        cardnumber: this.state.cardnumber
          .replace(/[^\d1-9]/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim(),
      })
    );
    setInterval(() =>
      this.setState({ cardnumber: this.state.cardnumber.slice(0, 19) })
    );

    this.setState({ setNumber: this.state.cardnumber });
    var x = this.state.cardnumber
      .replace(" ", "")
      .replace(" ", "")
      .replace(" ", "");
    this.setState({
      setNumber: x
        .padEnd(16, "•")
        .replace(/(.{4})/g, "$1 ")
        .trim(),
    });
  };
  Validitycon = () => {
    setInterval(() =>
      this.setState({
        validity: this.state.validity.slice(0, 5),
      })
    );
    setInterval(() =>
      this.setState({
        validity: this.state.validity
          .replace(/[^\d1-9]/g, "")
          .replace(/(.{2})/, "$1/")
          .trim(),
      })
    );
    this.setState({ setMMYY: this.state.validity });
    var y = this.state.validity.replace("/", "");
    this.setState({
      setMMYY: y
        .padEnd(4, "•")
        .replace(/(.{2})/, "$1/")
        .trim(),
    });
    if (
      this.state.validity.slice(0, 2) == "00" ||
      Number(this.state.validity.slice(0, 2)) > 12
    ) {
      this.setState({
        validity: this.state.validity.replace(
          this.state.validity.slice(0, 2),
          ""
        ),
      });
      this.setState({ setMMYY: "••/••" });
    }
  };

  espacebetweenNumber = (number) => {};
  render() {
    return (
      <div className="app">
        <Affiche
          holdername={this.state.holdername}
          setMMYY={this.state.setMMYY}
          setNumber={this.state.setNumber}
        />
        <div className="allinput">
          <form id="form">
            <label>Name :</label>
            <br />
            <input
              className="input"
              type="text"
              onChange={this.handleChangeName}
              value={this.state.holdername}
              onKeyDown={this.nameCon}
              onKeyUp={this.nameCon}
            />
            <br />
            <label>Card Number :</label>
            <br />
            <input
              className="input"
              type="text"
              onChange={this.handleCardNumber}
              value={this.state.cardnumber}
              onKeyDown={this.numCon}
              onKeyUp={this.numCon}
            />
            <br />
            <label>Validity :</label>
            <br />
            <input
              className="input"
              type="text"
              onChange={this.handleChangeValidity}
              value={this.state.validity}
              onKeyUp={this.Validitycon}
              onKeyDown={this.Validitycon}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default CreditCard;

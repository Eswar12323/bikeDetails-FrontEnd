import React, { Component } from 'react';
import './Login.css';
//import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bid: '',
      bname: '',
      ownername: '',
      email: '',
      phnumber: ''
    };
  }

  handleBidChange = (event) => {
    this.setState({ bid: event.target.value });
  };

  handleBnameChange = (event) => {
    this.setState({ bname: event.target.value });
  };

  handleOwnernameChange = (event) => {
    this.setState({ ownername: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhnumberChange = (event) => {
    this.setState({ phnumber: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      bid: this.state.bid,
      bname: this.state.bname,
      ownername: this.state.ownername,
      email: this.state.email,
      phnumber: this.state.phnumber
    };

    axios.post('http://127.0.0.1:8080/add', data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">Bid</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.bid}
          onChange={this.handleBidChange}
        />

        <label className="sign-label">Bike Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.bname}
          onChange={this.handleBnameChange}
        />

        <label className="sign-label">Owner Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.ownername}
          onChange={this.handleOwnernameChange}
        />

        <label className="sign-label">Email</label>
        <input
          className="sign-input"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <label className="sign-label">Phone Number</label>
        <input
          className="sign-input"
          type="tel"
          value={this.state.phnumber}
          onChange={this.handlePhnumberChange}
        />

        <button className="login-button" type="submit">
          Create
        </button>
        <Link to="/Showdata">
          <button className="login-button" type="submit">Next</button>
        </Link>
      </form>
    );
  }
}

export default Login;

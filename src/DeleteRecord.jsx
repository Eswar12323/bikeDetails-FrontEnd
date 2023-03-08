import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DeleteRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8080/delete/${this.state.id}`);
    
  };

  render() {
    return (
      <form onSubmit={this.handleDelete} className="delete-form">
        <label className="delete-label">ID</label>
        <input
          className="delete-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />

        <button className="delete-button" type="submit" >
          Delete Record
        </button>
        <Link to="/Update">
          <button className="back3" type="submit">Back</button>
        </Link>
      </form>
     
    );
  }
}

export default DeleteRecord;
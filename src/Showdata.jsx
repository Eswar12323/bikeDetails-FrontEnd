import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Showdata.css'
class Showdata extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/show')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
        <div>
           < Link to="/Update">
          <button className="next1" type="submit">Next</button>
        </Link>
        <Link to="/">
          <button className="back1" type="submit">Back</button>
        </Link>
      <table border={1}>
        <thead>
          <tr>
            <th>Bid</th>
            <th>Bname</th>
            <th>Owner Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.id}>
              <td>{item.bid}</td>
              <td>{item.bname}</td>
              <td>{item.ownername}</td>
              <td>{item.email}</td>
              <td>{item.phnumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}

export default Showdata;

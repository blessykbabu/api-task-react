
import React, { useState } from "react";

import axios from "axios";

export default function Frm () {
  const [state, setState] = useState({
    name: "",
    email: "",
    password:"",
    address:""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: state.name,
      email: state.email,
      password:state.password,
      address:state.address
    };
    axios.post(`https://65643fb7ceac41c0761db682.mockapi.io/api/userdata`, userData).then((response) => {
      console.log(response.status, response.data);
    });
  };

  return (
    <div>
      <h1>Register </h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label><br></br>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label><br></br>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label><br></br>
        <label htmlFor="address">
          Address:
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
        </label><br></br>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
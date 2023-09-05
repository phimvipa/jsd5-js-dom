import React from "react";
import "./App.css";

function App() {
  return <div id="app">
    <RegistrationForm />
    <DisplayMember />
  </div>;
}

const RegistrationForm = () => {
  return (
    <div className ="container">

      <h1>Registration Form</h1>

      <form id="registrationForm">
        <div className ="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className ="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Register</button>
      </form>

    </div>
  );
};

const DisplayMember = () => {
  const people = [
    "John Doe (john@example.com)",
    "Jane Smith (jane@example.com)"
  ];


  return (
    <div className ="members">
      <h2>Registered Members</h2>

      <div className="member">{people[0]}</div>
      <div className="member">{people[1]}</div>

    </div>
  );
};

export default App;

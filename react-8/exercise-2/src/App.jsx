import React from "react";
import "./App.css";

class App extends React.Component {
  // members is ARRAY containing OBJECT.
  members = [
    {
      name: "Mock J",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "P'Mean",
      age: 18,
      weight: 32,
      running: 80,
      status: "Extreme",
    },
    {
      name: "President Joe",
      age: 15,
      weight: 45,
      running: 10,
      status: "Good",
    },
    {
      name: "Mock J",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "P'Mean",
      age: 18,
      weight: 32,
      running: 80,
      status: "Extreme",
    },
    {
      name: "President Joe",
      age: 15,
      weight: 45,
      running: 10,
      status: "Good",
    },
  ];

  render() {
    return (
      <div id="app">
        <h1>Enter Data</h1>
        <RunningForm />
        <TableDisplay memberData={this.members} />
      </div>
    );
  }
}

class RunningForm extends React.Component {
  // code here
  import React from "react";
import "./App.css";

class App extends React.Component {
  // members is ARRAY containing OBJECT.
  members = [
    {
      name: "Mock J",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "P'Mean",
      age: 18,
      weight: 32,
      running: 80,
      status: "Extreme",
    },
    {
      name: "President Joe",
      age: 15,
      weight: 45,
      running: 10,
      status: "Good",
    },
    {
      name: "Mock J",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "P'Mean",
      age: 18,
      weight: 32,
      running: 80,
      status: "Extreme",
    },
    {
      name: "President Joe",
      age: 15,
      weight: 45,
      running: 10,
      status: "Good",
    },
  ];

  render() {
    return (
      <div id="app">
        <h1>Enter Data</h1>
        <RunningForm />
        <TableDisplay memberData={this.members} />
      </div>
    );
  }
}

class RunningForm extends React.Component {
  // code here
  render() {
    return (
      <form id="data-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />
        <br />
        <br />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" />
        <br />
        <br />

        <label htmlFor="running">Current Running (Minutes):</label>
        <input type="number" id="running" name="running" />
        <br />
        <br />

        <button type="button">Add Data</button>
      </form>
    );
  }
}

// class of TableDisplay here
class TableDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const memberData = this.props.memberData;
    return (
      <>
        <h1>Entered Data</h1>
        <table id="data-table" border="1" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Weight</th>
              <th>Current Running (Minutes)</th>
              <th>Good Running</th>
            </tr>
          </thead>
          <tbody>
            {memberData.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.weight}</td>
                  <td>{item.running}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;

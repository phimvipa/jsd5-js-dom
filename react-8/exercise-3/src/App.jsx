import React from "react";

// class App here
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { color: "", temp: "", name: "" };
    }
    render() {
      const color = this.state.color;
      console.log(this.state);
      return (
        <>
          {color === "yellow" && (
            <div
              style={{
                width: "150px",
                height: "150px",
                margin: "12px",
                background: "yellow",
              }}
            >
              YELLOW
            </div>
          )}
  
          {color === "blue" && (
            <div
              style={{
                width: "150px",
                height: "150px",
                margin: "12px",
                background: "blue",
              }}
            >
              BLUE
            </div>
          )}
  
          {color === "pink" && (
            <div
              style={{
                width: "150px",
                height: "150px",
                margin: "12px",
                background: "pink",
              }}
            >
              PINK
            </div>
          )}
  
          <button onClick={() => this.setState({ color: "yellow" })}>
            Show Yellow
          </button>
          <button onClick={() => this.setState({ color: "blue" })}>
            Show Blue
          </button>
          <button onClick={() => this.setState({ color: "pink" })}>Pink</button>
        </>
      );
    }
  }
  
export default App;

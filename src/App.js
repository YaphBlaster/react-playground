import React, { Component } from "react";
import "./App.css";

import Person from "./Person";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Person name="Yaphet" whatILike="to party" />
          <Person name="Yaphet's Evil Twin" whatILike="to ruin parties" />
          <Counter buttonText="Click Me!" />
        </header>
      </div>
    );
  }
}

export default App;

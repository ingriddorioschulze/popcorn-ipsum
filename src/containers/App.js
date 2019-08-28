import React, { Component } from "react";
import "../containers/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">Popcorn Ipsum</div>
        <div className="subtitle">Puff up your projects with the popcorn lorem ipsum.</div>
        <div>How many paragraphs you need?</div>
          <select name="number-paragraphs">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
          </select>
        <button>Pop!</button>
      </div>
    );
  }
}
  
export default App;

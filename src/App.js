import React, { Component } from "react";
import Form from "./components/Form";
import RecipeList from "./components/RecipeList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <RecipeList />
      </div>
    );
  }
}

export default App;

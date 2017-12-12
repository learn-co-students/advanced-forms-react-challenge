import React, { Component } from "react";
import Form from "./Form";
import RecipeList from "./RecipeList";
import "./App.css";

class App extends Component {
  state = {
    recipes: []
  };

  addRecipe = recipe => {
    this.setState(pState => {
      return {
        recipes: [...pState.recipes, recipe]
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Form addRecipe={this.addRecipe} />
        <RecipeList {...this.state} />
      </div>
    );
  }
}

export default App;

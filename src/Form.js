import React from "react";

class Form extends React.Component {
  state = {
    recipeName: "",
    recipeSteps: [""]
  };

  addStep = event => {
    event.preventDefault();
    this.setState(pState => {
      return {
        recipeSteps: [...pState.recipeSteps, ""]
      };
    });
  };

  removeStep = event => {
    event.preventDefault();
    let newSteps = this.state.recipeSteps.slice();
    newSteps.splice(parseInt(event.target.id), 1);
    this.setState(pState => {
      return {
        recipeSteps: newSteps
      };
    });
  };

  handleChange = event => {
    event.persist();
    let stateName;
    event.target.name.length === 1
      ? this.setState(pState => {
          return {
            recipeSteps: pState.recipeSteps.map((step, index) => {
              if (event.target.name === `${index}`) {
                return event.target.value;
              } else {
                return step;
              }
            })
          };
        })
      : this.setState({
          [event.target.name]: event.target.value
        });
    console.log(this.state.recipeSteps[event.target.name]);
    console.log(event.target.name);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRecipe(this.state);
  };

  render() {
    console.log(this.state);
    const stepInputs = this.state.recipeSteps.map((step, index) => {
      return (
        <div className="inputs" key={`step${index}`}>
          <input
            type="text"
            name={index}
            value={this.state.recipeSteps[index]}
            placeholder="Recipe Task"
            onChange={this.handleChange}
          />
          <button id={index} onClick={this.removeStep}>
            -
          </button>
        </div>
      );
    });
    return (
      <div className="sideForm">
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <input
              className="title"
              type="text"
              name="recipeName"
              value={this.state.recipeName}
              placeholder="Recipe Name"
              onChange={this.handleChange}
            />
          </div>
          {stepInputs}
          <button onClick={this.addStep}>Add Step</button>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;

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
    this.setState({
      recipeName: "",
      recipeSteps: [""]
    });
  };

  render() {
    console.log(this.state);
    const stepInputs = this.state.recipeSteps.map((step, index) => {
      return (
        <div className="two fields" key={`step${index}`}>
          <div className="field">
            <input
              type="text"
              name={index}
              value={this.state.recipeSteps[index]}
              placeholder="Recipe Step"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <button className="ui button" id={index} onClick={this.removeStep}>
              Remove Step
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="sideForm">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              className="title"
              type="text"
              name="recipeName"
              value={this.state.recipeName}
              placeholder="Recipe Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">{stepInputs}</div>
          <div className="field">
            <button className="ui button" onClick={this.addStep}>
              Add Step
            </button>
            <input className="ui button" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

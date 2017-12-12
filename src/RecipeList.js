import React from "react";
import Recipe from "./Recipe";

const RecipeList = props => {
  console.log(props);
  const recipes = props.recipes.map(recipe => <Recipe {...recipe} />);
  return <div className="recipes">{recipes}</div>;
};

export default RecipeList;

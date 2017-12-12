import React from "react";

const RecipeList = ({ recipeName, recipeSteps }) => {
  const steps = recipeSteps.map(step => <div>{step}</div>);
  return (
    <div>
      <h1>{recipeName}</h1>
      <h3>{steps}</h3>
    </div>
  );
};

export default RecipeList;

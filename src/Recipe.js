import React from "react";

const RecipeList = ({ recipeName, recipeSteps }) => {
  const steps = recipeSteps.map(step => <div>{step}</div>);
  return (
    <div>
      <h1 className="ui huge header">{recipeName}</h1>
      <h3 className="ui large header">{steps}</h3>
    </div>
  );
};

export default RecipeList;

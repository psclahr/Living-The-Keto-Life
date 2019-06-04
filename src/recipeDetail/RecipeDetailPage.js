import React from "react";

export default function RecipeDetailPage({ props, recipes, parentCallback }) {
  const targetRecipe = recipes.filter(recipe => {
    return recipe._id === props.match.params._id;
  });
  return <h3>{targetRecipe.map(recipe => recipe.title)}</h3>;
}

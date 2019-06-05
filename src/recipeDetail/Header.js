import React from "react";

export default function Header({ targetRecipe }) {
  return <h3>{targetRecipe.map(recipe => recipe.title)}</h3>;
}

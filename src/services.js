export const getIngredients = ingredient => {
  return fetch(`/getIngredients/${ingredient}`);
};

export const getIngredientSuggestion = () => {
  return fetch("/getIngredients");
};

import axios from "axios";

export const getIngredients = ingredient => {
  return axios.get(`/getIngredients/${ingredient}`);
};

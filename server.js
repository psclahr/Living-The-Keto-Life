const express = require("express");
const app = express();
var fetch = require("node-fetch");

let ingredientSuggestion = [];

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/getIngredients", function(req, res) {
  res.send(ingredientSuggestion);
});

app.get("/getIngredients/:ingredient", function(req, res) {
  const { ingredient } = req.params;
  fetch(
    `http://api.edamam.com/auto-complete?q=${ingredient}&limit=10&app_id=$702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7`
  )
    .then(res => res.json())
    .then(data => (ingredientSuggestion = data));
});

app.listen(3001, err => {
  err ? console.log(err) : console.log("Server ready");
});

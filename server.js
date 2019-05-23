const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/ingredient", function(req, res) {
  res.send();
});

app.listen(3001, err => {
  err ? console.log(err) : console.log("Server ready");
});

function getIngredients() {
  fetch(
    `http://api.edamam.com/auto-complete?q=app&limit=10&app_id=$702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7`
  )
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
}

getIngredients();

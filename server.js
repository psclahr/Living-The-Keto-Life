const express = require("express");
const app = express();
const axios = require("axios");

app.get("/getIngredients/:ingredient", function(req, res) {
  const { ingredient } = req.params;
  axios
    .get(
      `http://api.edamam.com/auto-complete?q=${ingredient}&limit=10&app_id=$702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7`
    )
    .then(response => console.log(response.data));
});

app.listen(3001, err => {
  err ? console.log(err) : console.log("Server ready");
});

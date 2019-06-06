const setupServer = require("./setup-server");
const app = setupServer();

const Recipe = require("./models/Recipe");

app.get("/recipes", (req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.json(err));
});

app.post("/recipes", (req, res) => {
  Recipe.create(req.body)
    .then(recipe => res.json(recipe))
    .catch(err => res.json(err));
});

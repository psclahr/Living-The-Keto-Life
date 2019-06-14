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

app.delete("/recipes/:id", (req, res) => {
  const { id } = req.params;
  Recipe.findByIdAndDelete(id)
    .then(recipe => res.status(201).json(recipe))
    .catch(err => res.status(500).json(err));
});

app.patch("/recipes/:id", (req, res) => {
  const { id } = req.params;
  Recipe.findByIdAndUpdate(id, req.body, { new: true })
    .then(recipe => res.json(recipe))
    .catch(err => res.json(err));
});

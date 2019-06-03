const setupServer = require("./setup-server");
const app = setupServer();

const Recipe = require("./models/Recipe");

app.get("/recipes", (req, res) => {
  Recipe.find()
    .then(cards => res.json(cards))
    .catch(err => res.json(err));
});

app.post("/recipes", (req, res) => {
  Recipe.create(req.body)
    .then(card => res.json(card))
    .catch(err => res.json(err));
});

const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: [String],
  ingredients: [
    {
      name: String,
      amount: Number,
      unit: String,
      calories: Number,
      carbs: Number,
      proteins: Number,
      fats: Number,
      fatsDivided: {
        saturatedFats: Number,
        monounsaturatedFats: Number,
        polyunsaturatedFats: Number
      }
    }
  ]
});

module.exports = mongoose.model("Recipe", recipeSchema);

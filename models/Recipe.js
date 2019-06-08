const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  steps: [String],
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
  ],
  totalCalories: Number,
  totalFats: Number,
  totalCarbs: Number,
  totalProteins: Number,
  /*fatsTotalDivided: {
    totalSaturatedFats: Number,
    totalMonounsaturatedFats: Number,
    totalPolyunsaturatedFats: Number
  },*/
  image: String
});

module.exports = mongoose.model("Recipe", recipeSchema);

import React from "react";
import { Pie } from "react-chartjs-2";

export default function AnalyseNutritions({ recipe }) {
  const totalCalories = recipe.totalCalories;
  const totalFats = recipe.totalFats;
  console.log(totalFats);
  const totalCarbs = recipe.totalCarbs;
  const totalProteins = recipe.totalProteins;

  const data = {
    labels: ["Fats", "Carbs", "Proteins"],
    datasets: [
      {
        label: "Nutrition Analyse",
        backgroundColor: ["yellow", "red", "blue"],
        borderColor: "black",
        data: [totalFats, totalCarbs, totalProteins]
      }
    ]
  };

  return <Pie data={data} />;
}

import React from "react";
import { PieChart, Pie, Cell, LabelList } from "recharts";

export default function AnalyseNutritions({ recipe }) {
  const totalCalories = recipe.totalCalories;
  const totalFats = recipe.totalFats;
  const totalCarbs = recipe.totalCarbs;
  const totalProteins = recipe.totalProteins;

  const total = [
    {
      name: "Fats",
      value: totalFats
    },
    {
      name: "Carbs",
      value: totalCarbs
    },
    {
      name: "Proteins",
      value: totalProteins
    }
  ];

  const colors = ["yellow", "red", "green"];

  return (
    <div>
      <p>Calories: {totalCalories}</p>
      <PieChart width={300} height={300}>
        <Pie data={total} fill="red" label>
          {total.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

import React from "react";
import Chart from "react-apexcharts";

export default function AnalyseNutritions({ recipe }) {
  const totalFats = recipe.totalFats;
  const totalCarbs = recipe.totalCarbs;
  const totalProteins = recipe.totalProteins;

  const options = {
    labels: ["Fats", "Carbs", "Proteins"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 320
          },
          legend: {
            position: "right",
            offsetY: 20,
            itemMargin: {
              horizontal: 5
            }
          }
        }
      }
    ]
  };

  const series = [totalFats, totalCarbs, totalProteins];

  return <Chart options={options} series={series} type="pie" />;
}

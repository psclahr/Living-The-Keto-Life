import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  &p {
    padding: 0;
    margin: 0;
  }
`;

export default function AnalyseNutritions({ recipe }) {
  const totalCalories = Math.round(recipe.totalCalories);
  const totalFatsInCalories = Math.round(recipe.totalFats * 9.3);
  const totalCarbsInCalories = Math.round(recipe.totalCarbs * 4.1);
  const totalProteinsInCalories = Math.round(recipe.totalProteins * 4.1);

  const total = [
    {
      name: "Fats",
      value: totalFatsInCalories
    },
    {
      name: "Carbs",
      value: totalCarbsInCalories
    },
    {
      name: "Proteins",
      value: totalProteinsInCalories
    }
  ];

  const colors = ["#0088FE", "#00C49F", "#FFBB28"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Container>
      <p>Calories: {totalCalories}</p>
      <PieChart width={350} height={350}>
        <Legend height={40} />
        <Pie
          dataKey="value"
          cx="50%"
          data={total}
          fill="red"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {total.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </Container>
  );
}

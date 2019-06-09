import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import styled from "styled-components";
import { Hints } from "./Hints";

const Container = styled.section`
  padding-left: 5%;
  padding-right: 5%;
  & h4 {
    margin-bottom: 0;
  }
`;

const Box = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(169, 171, 170, 1);
  margin-top: 30px;
  margin-bottom: 20px;
  padding-bottom: 15px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function AnalyseNutritions({ recipe }) {
  const [isKeto, setIsKeto] = useState("Everthing good");

  const totalCalories = Math.round(recipe.totalCalories);
  const totalFats = Math.round(recipe.totalFats);
  const totalCarbs = Math.round(recipe.totalCarbs);
  const totalProteins = Math.round(recipe.totalProteins);
  const totalFatsInCalories = totalFats * 9.3;
  const totalCarbsInCalories = totalCarbs * 4.1;
  const totalProteinsInCalories = totalProteins * 4.1;

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

  const colors = [
    "rgb(120, 218, 172)",
    "rgb(214, 232, 117)",
    "rgb(60, 136, 208)"
  ];

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
      <h4>Is it Keto?</h4>
      <Box>
        <Flex>
          <p>
            <b>Calories: {totalCalories}cal</b>
          </p>
        </Flex>
        <Flex>
          <span>Fats: {totalFats}g</span>
          <span>Carbs: {totalCarbs}g</span>
          <span>Proteins: {totalProteins}g</span>
        </Flex>
      </Box>
      <Flex>
        <PieChart width={300} height={300}>
          <Legend height={40} />
          <Pie
            dataKey="value"
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
      </Flex>
    </Container>
  );
}

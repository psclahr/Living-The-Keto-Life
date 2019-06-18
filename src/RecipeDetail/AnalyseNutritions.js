import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { Hints } from "./Hints";

const Container = styled.section`
  padding-left: 5%;
  padding-right: 5%;

  & h4 {
    margin-bottom: 0;
  }
`;

const StyledAbsoluteNutritionBox = styled.div`
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

const Bold = styled.p`
  font-weight: bold;
`;

const Light = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 15px;
`;

const GreenLight = styled(Light)`
  background: green;
`;
const YellowLight = styled(Light)`
  background: yellow;
`;
const RedLight = styled(Light)`
  background: red;
`;

const Italic = styled.p`
  font-style: italic;
`;

export default function AnalyseNutritions({ recipe }) {
  const totalCalories = Math.round(recipe.totalCalories);
  const totalFats = Math.round(recipe.totalFats);
  const totalCarbs = Math.round(recipe.totalCarbs);
  const totalProteins = Math.round(recipe.totalProteins);
  const totalFatsInCalories = totalFats * 9.3;
  const totalCarbsInCalories = totalCarbs * 4.1;
  const percentageCarbs = totalCarbsInCalories / totalCalories;
  const totalProteinsInCalories = totalProteins * 4.1;
  const percentageProteins = totalProteinsInCalories / totalCalories;
  const RADIAN = Math.PI / 180;

  let evaluationCarbs = "";
  let evaluationProteins = "";
  let ketoLight = "";
  let portions = 1;

  if (totalCalories / 800 <= 0.5) {
    portions = 1;
  } else {
    portions = Math.round(totalCalories / 800);
  }

  if (percentageCarbs <= 0.05) {
    evaluationCarbs = "Everthing good";
    ketoLight = "green";
  } else if (percentageCarbs > 0.05 && percentageCarbs <= 0.15) {
    evaluationCarbs = "Little bit to much carbs";
    ketoLight = "yellow";
  } else {
    evaluationCarbs = "Too much carbs";
    ketoLight = "red";
  }
  if (percentageProteins > 0.3) {
    evaluationProteins = "Too much proteins";
  }
  if (ketoLight === "green" && evaluationProteins === "Too much proteins") {
    ketoLight = "yellow";
  }

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
      <h4>Keto Analyse</h4>
      <StyledAbsoluteNutritionBox>
        <Flex>
          <Bold>Portions: {portions}</Bold>
          <Bold>Calories: {totalCalories}cal</Bold>
        </Flex>
        <Flex>
          <span>Fats: {totalFats}g</span>
          <span>Carbs: {totalCarbs}g</span>
          <span>Proteins: {totalProteins}g</span>
        </Flex>
      </StyledAbsoluteNutritionBox>
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
      <Flex>
        <h4>Keto-Score:</h4>
      </Flex>
      <Flex>
        {ketoLight === "green" ? <GreenLight /> : null}
        {ketoLight === "yellow" ? <YellowLight /> : null}
        {ketoLight === "red" ? <RedLight /> : null}
      </Flex>
      {evaluationCarbs === "Everthing good" ? (
        <Italic>"{Hints[0].hint}"</Italic>
      ) : null}
      {evaluationCarbs === "Little bit to much carbs" ? (
        <Italic>"{Hints[1].hint}"</Italic>
      ) : null}
      {evaluationCarbs === "Too much carbs" ? (
        <Italic>"{Hints[2].hint}"</Italic>
      ) : null}
      {evaluationProteins === "Too much proteins" ? (
        <Italic>"{Hints[3].hint}"</Italic>
      ) : null}
    </Container>
  );
}

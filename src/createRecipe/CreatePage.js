import React, { useState } from "react";
import styled from "styled-components";
import AddImage from "./CreateElements/AddImage";
import AddDescription from "./CreateElements/AddDescription";
import AddIngredient from "./CreateElements/AddIngredient";
import AddTitle from "./CreateElements/AddTitle";

const CreatePageGrid = styled.div`
  display: grid;
  grid-template-rows: 40px 170px auto auto 30px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  overflow-y: scroll;
`;

export default function CreatePage({ onButtonClick }) {
  const [title, setTitle] = useState("");
  const [step, setStep] = useState("");
  const [stepList, setStepList] = useState([]);
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState("gr");
  const [ingredientValue, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [options, setOptions] = useState([]);

  const descriptionRef = React.createRef();
  const descriptionInputRef = React.createRef();
  const ingredientRef = React.createRef();
  const ingredientAmountRef = React.createRef();

  function handleButtonClick(event) {
    event.preventDefault();
    onButtonClick({
      title,
      steps: stepList,
      ingredients
    });
  }
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setStep(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleUnitChange(event) {
    setUnit(event.target.value);
  }

  function handleIngredientChange(event) {
    setIngredient(event.target.value);
    searchForIngredients();
  }

  function handleSubmitStep(event) {
    event.preventDefault();
    setStepList([...stepList, step]);
    descriptionRef.current.reset();
    descriptionInputRef.current.focus();
  }

  function handleSubmitIngredient(event) {
    event.preventDefault();
    try {
      const nutritionQuery = async () => {
        await fetch(
          `https://api.edamam.com/api/nutrition-data?app_id=4bb611c5&app_key=8b9a2b559e7693bf21f151e736db51cc&ingr=${amount}%20${unit}%20${ingredientValue}`
        )
          .then(res => res.json())
          .then(data =>
            setIngredients([
              ...ingredients,
              {
                amount,
                unit,
                name: ingredientValue,
                calories: data.totalNutrients.ENERC_KCAL
                  ? data.totalNutrients.ENERC_KCAL.quantity
                  : 0,
                proteins: data.totalNutrients.PROCNT
                  ? data.totalNutrients.PROCNT.quantity
                  : 0,
                carbs: data.totalNutrients.CHOCDF
                  ? data.totalNutrients.CHOCDF.quantity
                  : 0,
                fats: data.totalNutrients.FAT
                  ? data.totalNutrients.FAT.quantity
                  : 0,
                fatsDivided: {
                  saturatedFats: data.totalNutrients.FASAT
                    ? data.totalNutrients.FASAT.quantity
                    : 0,
                  monounsaturatedFats: data.totalNutrients.FAMS
                    ? data.totalNutrients.FAMS.quantity
                    : 0,
                  polyunsaturatedFats: data.totalNutrients.FAPU
                    ? data.totalNutrients.FAPU.quantity
                    : 0
                }
              }
            ])
          );
      };
      nutritionQuery();
      ingredientRef.current.reset();
      ingredientAmountRef.current.focus();
    } catch (err) {
      console.log(err);
    }
  }

  function searchForIngredients() {
    fetch(
      `https://api.edamam.com/auto-complete?q=${ingredientValue}&limit=10&app_id=$702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7`
    )
      .then(res => res.json())
      .then(data => setOptions(data))
      .catch(err => console.log(err));
  }

  return (
    <CreatePageGrid>
      <AddTitle onChange={handleTitleChange} />
      <AddImage />
      <AddIngredient
        ingredients={ingredients}
        options={options}
        onSubmit={handleSubmitIngredient}
        onChangeAmount={handleAmountChange}
        onChangeUnit={handleUnitChange}
        onChangeIngredient={handleIngredientChange}
        ingredientRef={ingredientRef}
        ingredientAmountRef={ingredientAmountRef}
      />
      <AddDescription
        onSubmit={handleSubmitStep}
        onChange={handleDescriptionChange}
        stepList={stepList}
        descriptionRef={descriptionRef}
        descriptionInputRef={descriptionInputRef}
      />
      <button onClick={handleButtonClick}>+</button>
    </CreatePageGrid>
  );
}

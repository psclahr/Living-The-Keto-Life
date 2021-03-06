import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddImage from "./CreateElements/AddImage";
import AddDescription from "./CreateElements/AddDescription";
import AddIngredient from "./CreateElements/AddIngredient";
import AddTitle from "./CreateElements/AddTitle";
import {
  uploadImage,
  nutritionQuery,
  settingNutritions,
  searchForIngredients
} from "../services";

const CreatePageContainer = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: 40px 187px auto auto 30px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSubmitButton = styled.button`
  outline: none;
  width: 150px;
  height: 30px;
  background: linear-gradient(90deg, rgb(214, 232, 117), rgb(120, 218, 172));
  border-radius: 25px;
  border: none;
`;

const DisabledButton = styled(StyledSubmitButton)`
  opacity: 0.3;
`;

const descriptionRef = React.createRef();
const descriptionInputRef = React.createRef();
const ingredientRef = React.createRef();
const ingredientAmountRef = React.createRef();

export default function CreatePage({ onButtonClick }) {
  const [title, setTitle] = useState(
    localStorage.getItem("titleInLocalStorage") || ""
  );
  const [step, setStep] = useState("");
  const [stepList, setStepList] = useState(
    JSON.parse(localStorage.getItem("stepListInLocalStorage")) || []
  );
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState("gr");
  const [ingredientValue, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState(
    JSON.parse(localStorage.getItem("ingredientsInLocalStorage")) || []
  );
  const [options, setOptions] = useState([]);
  const [image, setImage] = useState(
    localStorage.getItem("imageUrlInLocalStorage") || ""
  );

  useEffect(() => {
    localStorage.setItem(
      "ingredientsInLocalStorage",
      JSON.stringify(ingredients)
    );
  }, [ingredients]);

  useEffect(() => {
    localStorage.setItem("stepListInLocalStorage", JSON.stringify(stepList));
  }, [stepList]);

  function handleButtonClick(event) {
    event.preventDefault();

    const totalCalories = total(ingredient => ingredient.calories);
    const totalFats = total(ingredient => ingredient.fats);
    const totalCarbs = total(ingredient => ingredient.carbs);
    const totalProteins = total(ingredient => ingredient.proteins);

    function total(nutrition) {
      return ingredients.map(nutrition).reduce(getSum);
    }

    function getSum(total, num) {
      return total + num;
    }

    onButtonClick({
      title,
      steps: stepList,
      ingredients,
      image,
      totalCalories,
      totalFats,
      totalCarbs,
      totalProteins
    });

    localStorage.clear();
  }

  function handleTitleChange(event) {
    localStorage.setItem("titleInLocalStorage", event.target.value);
    setTitle(event.target.value);
  }

  async function handleImageUpload(file) {
    try {
      const url = await uploadImage(file);
      localStorage.setItem("imageUrlInLocalStorage", url);
      setImage(url);
    } catch (err) {
      console.log(err);
    }
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleUnitChange(event) {
    setUnit(event.target.value);
  }

  function handleIngredientChange(event) {
    setIngredient(event.target.value);
    startSearchingForIngredients();
  }

  function handleDescriptionChange(event) {
    setStep(event.target.value);
  }

  function handleSubmitStep(event) {
    event.preventDefault();
    localStorage.setItem(
      "stepListInLocalStorage",
      JSON.stringify([...stepList, step])
    );
    setStepList([...stepList, step]);
    descriptionRef.current.reset();
    descriptionInputRef.current.focus();
  }

  async function handleSubmitIngredient(event) {
    event.preventDefault();
    try {
      const newIngredient = await nutritionQuery(amount, unit, ingredientValue);
      setIngredients([
        ...ingredients,
        settingNutritions(amount, unit, ingredientValue, newIngredient)
      ]);
      ingredientRef.current.reset();
      setUnit("gr");
      ingredientAmountRef.current.focus();
    } catch (err) {
      console.log(err);
    }
  }

  function startSearchingForIngredients() {
    searchForIngredients(ingredientValue)
      .then(data => setOptions(data))
      .catch(err => console.log(err));
  }

  function handleDeleteIngredient(ingredient) {
    const index = ingredients.indexOf(ingredient) + 1;
    setIngredients([
      ...ingredients.slice(0, index - 1),
      ...ingredients.slice(index)
    ]);
  }

  function handleDeleteStep(step) {
    const index = stepList.indexOf(step) + 1;
    setStepList([...stepList.slice(0, index - 1), ...stepList.slice(index)]);
  }

  return (
    <CreatePageContainer>
      <AddTitle value={title} onChange={handleTitleChange} />
      <AddImage image={image} onChangeImageUpload={handleImageUpload} />
      <AddIngredient
        ingredients={ingredients}
        options={options}
        onSubmit={handleSubmitIngredient}
        onChangeAmount={handleAmountChange}
        onChangeUnit={handleUnitChange}
        onChangeIngredient={handleIngredientChange}
        onDeleteClick={handleDeleteIngredient}
        ingredientRef={ingredientRef}
        ingredientAmountRef={ingredientAmountRef}
      />
      <AddDescription
        onSubmit={handleSubmitStep}
        onChange={handleDescriptionChange}
        onDeleteClick={handleDeleteStep}
        stepList={stepList}
        descriptionRef={descriptionRef}
        descriptionInputRef={descriptionInputRef}
      />
      <Flex>
        {title && stepList.length && ingredients.length && image ? (
          <StyledSubmitButton onClick={handleButtonClick}>
            Create Recipe!
          </StyledSubmitButton>
        ) : (
          <DisabledButton disabled>Create Recipe!</DisabledButton>
        )}
      </Flex>
    </CreatePageContainer>
  );
}

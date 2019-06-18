import React, { useState } from "react";
import styled from "styled-components";
import AddImage from "./CreateElements/AddImage";
import AddDescription from "./CreateElements/AddDescription";
import AddIngredient from "./CreateElements/AddIngredient";
import AddTitle from "./CreateElements/AddTitle";
import BackIcon from "../icons/BackIcon";
import {
  uploadImage,
  nutritionQuery,
  settingNutritions,
  searchForIngredients
} from "../services";

const CreatePageContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 50px 187px 50px auto auto 30px;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: scroll;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledBackButton = styled.button`
  outline: none;
  border: none;
  width: 100px;
  height: 30px;
  background: linear-gradient(90deg, rgb(214, 232, 117), rgb(120, 218, 172));
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledImageLabel = styled.label`
  background: linear-gradient(90deg, rgb(214, 232, 117), rgb(120, 218, 172));
  height: 30px;
  border-radius: 25px;
  margin-top: 20px;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImageInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
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

export default function EditPage({
  editRecipe,
  onBackClick,
  onButtonClickToEdit
}) {
  const [title, setTitle] = useState(editRecipe.title);
  const [step, setStep] = useState("");
  const [stepList, setStepList] = useState(editRecipe.steps);
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState("gr");
  const [ingredientValue, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState(editRecipe.ingredients);
  const [options, setOptions] = useState([]);
  const [image, setImage] = useState(editRecipe.image);

  function handleEditClick(event) {
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

    onButtonClickToEdit({
      _id: editRecipe._id,
      title,
      steps: stepList,
      ingredients,
      image,
      totalCalories,
      totalFats,
      totalCarbs,
      totalProteins
    });
  }
  function handleTitleChange(event) {
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
      <Flex>
        <StyledBackButton onClick={onBackClick}>
          <BackIcon />
          Back
        </StyledBackButton>
      </Flex>
      <AddTitle value={title} onChange={handleTitleChange} />
      <AddImage image={image} />
      <Flex>
        <StyledImageLabel htmlFor="file">
          New Image
          <StyledImageInput
            onChange={handleImageUpload}
            type="file"
            name="file"
            id="file"
          />
        </StyledImageLabel>
      </Flex>
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
          <StyledSubmitButton onClick={handleEditClick}>
            Save Changes
          </StyledSubmitButton>
        ) : (
          <DisabledButton disabled>Save Changes</DisabledButton>
        )}
      </Flex>
    </CreatePageContainer>
  );
}

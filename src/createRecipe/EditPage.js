import React, { useState } from "react";
import styled from "styled-components";
import AddImage from "./CreateElements/AddImage";
import AddDescription from "./CreateElements/AddDescription";
import AddIngredient from "./CreateElements/AddIngredient";
import AddTitle from "./CreateElements/AddTitle";

const CreatePageGrid = styled.div`
  display: grid;
  grid-template-rows: 40px 187px auto auto 30px;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: scroll;
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
`;

const DisabledButton = styled(StyledSubmitButton)`
  opacity: 0.3;
`;

export default function EditPage({ editRecipe, onButtonClickToEdit }) {
  const [title, setTitle] = useState(editRecipe.title);
  const [step, setStep] = useState("");
  const [stepList, setStepList] = useState(editRecipe.steps);
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState("gr");
  const [ingredientValue, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState(editRecipe.ingredients);
  const [options, setOptions] = useState([]);
  const image = editRecipe.image;

  const descriptionRef = React.createRef();
  const descriptionInputRef = React.createRef();
  const ingredientRef = React.createRef();
  const ingredientAmountRef = React.createRef();

  function handleEditClick(event) {
    event.preventDefault();

    const totalCalories = ingredients
      .map(ingredient => ingredient.calories)
      .reduce(getSum);

    const totalFats = ingredients
      .map(ingredient => ingredient.fats)
      .reduce(getSum);

    const totalCarbs = ingredients
      .map(ingredient => ingredient.carbs)
      .reduce(getSum);

    const totalProteins = ingredients
      .map(ingredient => ingredient.proteins)
      .reduce(getSum);

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
      setUnit("gr");
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

  function handleDeleteIngredient(ingredient) {
    const index = ingredients.indexOf(ingredient) + 1;
    setIngredients([
      ...ingredients.slice(0, index - 1),
      ...ingredients.slice(index)
    ]);
  }

  function getSum(total, num) {
    return total + num;
  }

  return (
    <CreatePageGrid>
      <AddTitle value={title} onChange={handleTitleChange} />
      <AddImage image={image} />
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
    </CreatePageGrid>
  );
}

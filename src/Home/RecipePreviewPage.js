import React from "react";
import styled from "styled-components";
import RecipePreview from "./RecipePreview";
import { Link } from "react-router-dom";
import TrashIcon from "../icons/TrashIcon";
import ReactModal from "react-modal";

const Container = styled.div`
  position: relative;
`;

const StyledRecipeList = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  overflow-y: scroll;
`;

const StyledDeleteButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 32px;
  top: 32px;
`;
const StyledReactModal = styled(ReactModal)`
  outline: none;
  width: 80%;
  border: 3px solid rgb(120, 218, 172);
  position: absolute;
  top: 35%;
  left: 10%;
  display: grid;
  grid-template-rows: 150px 50px;
`;

const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledCancelButtonModal = styled.button`
  border-radius: 25px;
  width: 75px;
  height: 30px;
`;

const StyledDeleteButtonModal = styled.button`
  background: red;
  color: white;
  border-radius: 25px;
  width: 75px;
  height: 30px;
`;

ReactModal.setAppElement("#root");

export default function RecipeList({
  recipes,
  onClick,
  onDeleteClick,
  onOpenModal,
  onCloseModal,
  showModal
}) {
  return (
    <StyledRecipeList>
      {recipes.map(recipe => {
        const target = `/recipes/${recipe._id}`;
        return (
          <Container key={recipe._id}>
            <StyledDeleteButton onClick={onOpenModal}>
              <TrashIcon />
            </StyledDeleteButton>
            <StyledReactModal isOpen={showModal} contentLabel="Delete Modal">
              <StyledQuestion>
                Do you really want to delete "{recipe.title}" as a recipe?
              </StyledQuestion>
              <Flex>
                <StyledCancelButtonModal onClick={onCloseModal}>
                  Cancel
                </StyledCancelButtonModal>
                <StyledDeleteButtonModal onClick={() => onDeleteClick(recipe)}>
                  Delete
                </StyledDeleteButtonModal>
              </Flex>
            </StyledReactModal>
            <Link to={target}>
              <RecipePreview
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClick(recipe.title)}
              />
            </Link>
          </Container>
        );
      })}
    </StyledRecipeList>
  );
}

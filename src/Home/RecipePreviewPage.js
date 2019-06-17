import React, { useState } from "react";
import styled from "styled-components";
import RecipePreview from "./RecipePreview";
import { Link } from "react-router-dom";
import BigTrashIcon from "../icons/BigTrashIcon";
import EditIcon from "../icons/EditIcon";
import MoreIcon from "../icons/MoreIcon";
import ReactModal from "react-modal";

const Container = styled.div`
  position: relative;
`;

const StyledRecipeList = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  overflow-y: scroll;
`;

const StyledMoreButton = styled.button`
  outline: none;
  height: 30px;
  background: none;
  border: none;
  position: absolute;
  right: 11%;
  top: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenu = styled.div`
  background: none;
  width: 180px;
  height: 75px;
  position: absolute;
  top: 88px;
  right: 26%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

const StyledMenuOpacity = styled(StyledMenu)`
  opacity: 0.2;
`;

const StyledEditButton = styled.button`
  outline: none;
  background: none;
  border: none;
`;

const StyledDeleteButton = styled.button`
  outline: none;
  background: none;
  border: none;
`;
const StyledReactModal = styled(ReactModal)`
  outline: none;
  width: 80%;
  border: 3px solid rgb(120, 218, 172);
  position: absolute;
  top: 30%;
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
  border: 1px solid lightgray;
  border-radius: 25px;
  width: 75px;
  height: 30px;
`;

const StyledDeleteButtonModal = styled.button`
  background: red;
  color: white;
  border: none;
  border-radius: 25px;
  width: 75px;
  height: 30px;
`;

ReactModal.setAppElement("#root");

export default function RecipeList({
  recipes,
  onClick,
  onDeleteClick,
  onEditClick,
  onOpenModal,
  onCloseModal,
  showModal
}) {
  const [showMore, setShowMore] = useState(null);

  function toggleMoreButton(recipe) {
    setShowMore(showMore === recipe ? null : recipe);
  }

  return (
    <StyledRecipeList>
      {recipes.map(recipe => {
        const target = `/recipes/${recipe._id}`;
        return (
          <Container key={recipe._id}>
            <StyledMoreButton onClick={() => toggleMoreButton(recipe)}>
              <MoreIcon />
            </StyledMoreButton>
            {recipe === showMore ? (
              <>
                {showModal ? (
                  <StyledMenuOpacity>
                    <StyledEditButton>
                      <EditIcon />
                    </StyledEditButton>
                    <StyledDeleteButton>
                      <BigTrashIcon />
                    </StyledDeleteButton>
                  </StyledMenuOpacity>
                ) : (
                  <StyledMenu>
                    <StyledEditButton onClick={() => onEditClick(recipe)}>
                      <EditIcon />
                    </StyledEditButton>
                    <StyledDeleteButton onClick={onOpenModal}>
                      <BigTrashIcon />
                    </StyledDeleteButton>
                  </StyledMenu>
                )}
                <StyledReactModal
                  isOpen={showModal}
                  contentLabel="Delete Modal"
                >
                  <StyledQuestion>
                    Do you really want to delete "{recipe.title}" as a recipe?
                  </StyledQuestion>
                  <Flex>
                    <StyledCancelButtonModal onClick={onCloseModal}>
                      Cancel
                    </StyledCancelButtonModal>
                    <StyledDeleteButtonModal
                      onClick={() => onDeleteClick(recipe)}
                    >
                      Delete
                    </StyledDeleteButtonModal>
                  </Flex>
                </StyledReactModal>
              </>
            ) : null}
            {showMore ? (
              <RecipePreview
                title={recipe.title}
                image={recipe.image}
                recipe={recipe}
                showMore={showMore}
                onClick={() => onClick(recipe.title)}
              />
            ) : (
              <Link to={target}>
                <RecipePreview
                  title={recipe.title}
                  image={recipe.image}
                  recipe={recipe}
                  showMore={showMore}
                  onClick={() => onClick(recipe.title)}
                />
              </Link>
            )}
          </Container>
        );
      })}
    </StyledRecipeList>
  );
}

import React, { useState } from "react";
import styled from "styled-components";
import RecipePreview from "./RecipePreview";
import { Link } from "react-router-dom";
import BigTrashIcon from "../icons/BigTrashIcon";
import EditIcon from "../icons/EditIcon";
import MoreIcon from "../icons/MoreIcon";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const StyledRecipeList = styled.section`
  overflow-y: scroll;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

const Container = styled.div`
  position: relative;
`;

const StyledMoreButton = styled.button`
  outline: none;
  background: none;
  border: none;
  height: 30px;
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

const StyledMenuNone = styled(StyledMenu)`
  display: none;
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
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledCancelButtonInModal = styled.button`
  border: 1px solid lightgray;
  border-radius: 25px;
  width: 75px;
  height: 30px;
`;

const StyledDeleteButtonInModal = styled.button`
  border: none;
  background: red;
  color: white;
  width: 75px;
  height: 30px;
  border-radius: 25px;
`;

export default function RecipePreviewPage({
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
                  <StyledMenuNone>
                    <StyledEditButton>
                      <EditIcon />
                    </StyledEditButton>
                    <StyledDeleteButton>
                      <BigTrashIcon />
                    </StyledDeleteButton>
                  </StyledMenuNone>
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
                    <StyledCancelButtonInModal onClick={onCloseModal}>
                      Cancel
                    </StyledCancelButtonInModal>
                    <StyledDeleteButtonInModal
                      onClick={() => onDeleteClick(recipe)}
                    >
                      Delete
                    </StyledDeleteButtonInModal>
                  </Flex>
                </StyledReactModal>
              </>
            ) : null}
            {showMore ? (
              <RecipePreview
                recipe={recipe}
                showMore={showMore}
                onPreviewClick={() => onClick(recipe.title)}
              />
            ) : (
              <Link to={target}>
                <RecipePreview
                  recipe={recipe}
                  showMore={showMore}
                  onPreviewClick={() => onClick(recipe.title)}
                />
              </Link>
            )}
          </Container>
        );
      })}
    </StyledRecipeList>
  );
}

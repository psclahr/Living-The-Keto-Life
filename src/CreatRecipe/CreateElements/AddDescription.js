import React from "react";
import styled from "styled-components";
import TrashIcon from "../../icons/TrashIcon";

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTextarea = styled.textarea`
  width: 90%;
  height: 100px;
  border: 2px solid rgba(120, 218, 172, 0.3);
  border-radius: 10px;
  transition: all 1s ease;

  &:focus {
    outline: none;
    border-color: rgba(120, 218, 172, 1);
  }
`;

const StyledForm = styled.form`
  margin-top: 10px;
  margin-left: 5%;
`;

const StyledButton = styled.button`
  background: linear-gradient(90deg, rgb(214, 232, 117), rgb(120, 218, 172));
  color: #434644;
  width: 100px;
  height: 30px;
  border-radius: 25px;
  border: none;
`;

const StyledList = styled.ol`
  min-height: 100px;
`;

const StyledListItemGrid = styled.div`
  display: grid;
  grid-template-columns: 30px auto 90px;
  margin-right: 18px;
`;

const StyledListNumber = styled.span`
  margin-top: 10px;
  color: rgb(120 218 172);
  font-weight: bold;
  font-size: 20px;
`;

const StyledListItems = styled.li`
  margin-top: 10px;
  list-style: none;
`;

const StyledDeleteButton = styled.button`
  outline: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
`;

export default function AddDescription({
  onSubmit,
  onChange,
  onDeleteClick,
  stepList,
  descriptionRef,
  descriptionInputRef
}) {
  let stepNumber = 1;
  let keyNumber = 1;

  return (
    <section>
      <h4>Steps</h4>
      <Flex>
        <StyledTextarea
          ref={descriptionInputRef}
          onChange={onChange}
          placeholder="Step..."
          form="stepform"
        />
      </Flex>
      <StyledForm ref={descriptionRef} onSubmit={onSubmit} id="stepform">
        <StyledButton>Add Step</StyledButton>
      </StyledForm>
      <StyledList>
        {stepList.map(step => {
          return (
            <StyledListItemGrid key={keyNumber++}>
              <StyledListNumber>{stepNumber++}</StyledListNumber>
              <StyledListItems>{step}</StyledListItems>
              <StyledDeleteButton onClick={() => onDeleteClick(step)}>
                <TrashIcon />
              </StyledDeleteButton>
            </StyledListItemGrid>
          );
        })}
      </StyledList>
    </section>
  );
}
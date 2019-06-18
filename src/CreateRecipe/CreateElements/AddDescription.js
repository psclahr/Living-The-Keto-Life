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
  margin-right: 18px;
  display: grid;
  grid-template-columns: 30px auto 90px;
`;

const StyledListNumber = styled.span`
  color: rgb(120 218 172);
  margin-top: 10px;
  font-weight: bold;
  font-size: 20px;
`;

const StyledListItem = styled.li`
  list-style: none;
  margin-top: 10px;
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
  let StepNumberForKey = 1;

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
            <StyledListItemGrid key={StepNumberForKey++}>
              <StyledListNumber>{stepNumber++}</StyledListNumber>
              <StyledListItem>{step}</StyledListItem>
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

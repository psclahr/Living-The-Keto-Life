import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 157px;
`;

const StyledHead = styled.div`
  background: linear-gradient(90deg, rgb(214, 232, 117), rgb(120, 218, 172));
  margin-bottom: 0;
  display: grid;
  grid-template-columns: auto 40px;
`;

const StyledTitle = styled.h3`
  background: none;
  display: flex;
  align-items: center;
`;

const StyledRecipePreview = styled.div`
  background-image: url(${props => props.url});
  height: 157px;
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const StyledRecipePreviewOpacity = styled(StyledRecipePreview)`
  opacity: 0.3;
`;

export default function RecipePreview({
  title,
  image,
  recipe,
  showMore,
  onPreviewClick
}) {
  return (
    <Container title={title} image={image} onClick={onPreviewClick}>
      {recipe === showMore ? (
        <Grid>
          <StyledHead>
            <StyledTitle>{title}</StyledTitle>
          </StyledHead>
          <StyledRecipePreviewOpacity url={image} />
        </Grid>
      ) : (
        <Grid>
          <StyledHead>
            <StyledTitle>{title}</StyledTitle>
          </StyledHead>
          <StyledRecipePreview url={image} />
        </Grid>
      )}
    </Container>
  );
}

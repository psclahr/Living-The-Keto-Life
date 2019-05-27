import React from "react";
import styled from "styled-components";
import BookButton from "./BookButton";
import AddButton from "./AddButton";
import PageTitle from "./PageTitle";

const NavigationGrid = styled.nav`
  width: 100vw;
  display: grid;
  grid-template-columns: 75px auto 75px;
`;

export default function Navigation() {
  return (
    <NavigationGrid>
      <BookButton />
      <PageTitle />
      <AddButton />
    </NavigationGrid>
  );
}

import React from "react";
import styled from "styled-components";
import BookButton from "./BookButton";
import AddButton from "./AddButton";
import NavLink from "./NavLink";

const NavigationGrid = styled.nav`
  width: 100vw;
  display: grid;
  grid-template-columns: 75px auto 75px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledNavLinkBook = styled(NavLink)`
  box-shadow: 4px 3px 9px 0 rgba(0, 0, 0, 0.5);
`;

const StyledNavLinkAdd = styled(NavLink)`
  box-shadow: -4px 3px 9px 0 rgba(0, 0, 0, 0.5);
`;

export default function Navigation({
  onClickBook,
  onClickAdd,
  currentPageTitle
}) {
  return (
    <NavigationGrid>
      <Container>
        <StyledNavLinkBook exact to="/" onClick={onClickBook}>
          <BookButton />
        </StyledNavLinkBook>
      </Container>
      <Container>
        <h3>{currentPageTitle}</h3>
      </Container>
      <Container>
        <StyledNavLinkAdd to="/create" onClick={onClickAdd}>
          <AddButton />
        </StyledNavLinkAdd>
      </Container>
    </NavigationGrid>
  );
}

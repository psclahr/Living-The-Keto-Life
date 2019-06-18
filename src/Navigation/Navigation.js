import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import AddIcon from "../icons/AddIcon";
import BookIcon from "../icons/BookIcon";

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
  box-shadow: 0px 3px 9px 0 rgba(0, 0, 0, 0.5);
`;

const StyledNavLinkAdd = styled(NavLink)`
  box-shadow: 0px 3px 9px 0 rgba(0, 0, 0, 0.5);
`;

const StyledCurrentPage = styled.h2`
  text-align: center;
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
          <BookIcon />
        </StyledNavLinkBook>
      </Container>
      <Container>
        <StyledCurrentPage>{currentPageTitle}</StyledCurrentPage>
      </Container>
      <Container>
        <StyledNavLinkAdd to="/create" onClick={onClickAdd}>
          <AddIcon />
        </StyledNavLinkAdd>
      </Container>
    </NavigationGrid>
  );
}

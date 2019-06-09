import React from "react";
import styled from "styled-components";

const Container = styled.header``;

const StyledHeader = styled.h1`
  font-size: 28px;
  @import url("https://fonts.googleapis.com/css?family=Dancing+Script&display=swap");
  font-family: "Dancing Script", cursive;
  margin-left: 5%;
  margin-bottom: 0;
  color: #434644;
`;

const Line = styled.div`
  width: 90%;
  height: 2px;
  margin-top: 3px;
  background: linear-gradient(90deg, rgb(214, 232, 117), rgb(120, 218, 172));
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <Container>
      <StyledHeader>Living The Keto Life</StyledHeader>
      <Flex>
        <Line />
      </Flex>
    </Container>
  );
}

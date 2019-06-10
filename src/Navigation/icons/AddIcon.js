import React from "react";
import styled from "styled-components";

const StyledSvgContainer = styled.svg`
  background: none;
`;

export default function AddIcon() {
  return (
    <StyledSvgContainer
      width="30px"
      height="30px"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <g
          id="NavBar"
          transform="translate(-321.000000, -24.000000)"
          stroke="#434644"
          strokeWidth="2"
        >
          <g id="Add-Nav" transform="translate(313.000000, 17.000000)">
            <g id="Add-Symbol" transform="translate(9.000000, 8.000000)">
              <path d="M14,0.56 L14,27.44" id="Line" />
              <path d="M27.44,14 L0.56,14" id="Line" />
            </g>
          </g>
        </g>
      </g>
    </StyledSvgContainer>
  );
}

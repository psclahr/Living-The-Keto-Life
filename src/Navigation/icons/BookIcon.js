import React from "react";
import styled from "styled-components";

const StyledSvgContainer = styled.svg`
  background: none;
`;

export default function BookIcon() {
  return (
    <StyledSvgContainer
      width="25px"
      height="32px"
      viewBox="0 0 21 28"
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
      >
        <g id="Book-Nav" stroke="#434644">
          <g id="Book-Symbol">
            <g>
              <rect
                id="Rectangle"
                strokeWidth="2"
                fillOpacity="0"
                x="1"
                y="1"
                width="19"
                height="26"
                rx="1"
              />
              <path
                d="M4.5,6.5 L16.5,6.5"
                id="Line-2"
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M4.5,13.5 L16.5,13.5"
                id="Line-2"
                strokeLinecap="square"
              />
              <path
                d="M4.5,20.5 L16.5,20.5"
                id="Line-2"
                strokeLinecap="square"
              />
            </g>
          </g>
        </g>
      </g>
    </StyledSvgContainer>
  );
}

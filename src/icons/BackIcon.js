import React from "react";
import styled from "styled-components";

const StyledSvgContainer = styled.svg`
  background: none;
`;

export default function BackIcon() {
  return (
    <StyledSvgContainer
      width="28px"
      height="16px"
      viewBox="0 0 28 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Outlined/UI/arrow_left"
          transform="translate(-2.000000, -8.000000)"
          fill="#434644"
        >
          <path
            d="M30,15 L4.58999996,15 L9.87999998,9.70999998 L8.45999998,8.28999998 L2.87999996,13.88 C1.71018644,15.0512702 1.71018644,16.9487298 2.87999996,18.12 L8.45999998,23.71 L9.87999998,22.29 L4.58999996,17 L30,17 L30,15 Z"
            id="Style"
          />
        </g>
      </g>
    </StyledSvgContainer>
  );
}

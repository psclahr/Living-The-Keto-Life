import React from "react";
import styled from "styled-components";

const StyledSvgContainer = styled.svg`
  background: none;
`;

export default function BigTrashIcon() {
  return (
    <StyledSvgContainer
      width="30px"
      height="34px"
      viewBox="0 0 24 28"
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
          id="Outlined/UI/trash"
          transform="translate(-4.000000, -2.000000)"
          fill="#434644"
        >
          <path
            d="M15,12 L17,12 L17,24 L15,24 L15,12 Z M19,12 L21,12 L21,24 L19,24 L19,12 Z M11,12 L13,12 L13,24 L11,24 L11,12 Z M20,5.99999996 L28,5.99999996 L28,7.99999996 L26,7.99999996 L26,27 C26,28.6568543 24.6568543,30 23,30 L8.99999996,30 C7.34314572,30 5.99999997,28.6568543 5.99999996,27 L5.99999996,7.99999996 L3.99999996,7.99999996 L3.99999996,5.99999996 L12,5.99999996 L12,4.99999996 C12,3.34314571 13.3431457,1.99999996 15,1.99999996 L17,1.99999996 C18.6568543,1.99999996 20,3.34314571 20,4.99999996 L20,5.99999996 Z M14,4.99999996 L14,5.99999996 L18,5.99999996 L18,4.99999996 C18,4.44771521 17.5522848,3.99999996 17,3.99999996 L15,3.99999996 C14.4477152,3.99999996 14,4.44771521 14,4.99999996 Z M24,27 L24,7.99999997 L7.99999997,7.99999997 L7.99999997,27 C7.99999997,27.5522848 8.44771523,28 8.99999997,28 L23,28 C23.5522848,28 24,27.5522848 24,27 Z"
            id="Style"
          />
        </g>
      </g>
    </StyledSvgContainer>
  );
}

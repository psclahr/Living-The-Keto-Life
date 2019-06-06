import React from "react";

export default function InfoButton({ onClick }) {
  return (
    <div onClick={onClick}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <circle id="path-1" cx="9" cy="9" r="9" />
          <filter
            x="-27.8%"
            y="-22.2%"
            width="155.6%"
            height="155.6%"
            filterUnits="objectBoundingBox"
            id="filter-2"
          >
            <feOffset
              dx="0"
              dy="1"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              stdDeviation="1.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Detailansicht" transform="translate(-36.000000, -384.000000)">
            <rect opacity="0.356971154" x="0" y="0" width="375" height="667" />
            <g id="InfoButton" transform="translate(39.000000, 386.000000)">
              <g id="Oval">
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-2)"
                  href="#path-1"
                />
                <use fill="#FFFFFF" fillRule="evenodd" href="#path-1" />
              </g>
              <g
                id="InfoIcon"
                transform="translate(7.000000, 3.000000)"
                stroke="#000000"
                strokeWidth="1"
              >
                <path d="M2,4.5 L2,10.5" id="Line-7" strokeLinecap="square" />
                <path d="M2,4.5 L0.5,4.5" id="Line" strokeLinecap="square" />
                <circle
                  id="Oval"
                  fill="#000000"
                  fillRule="evenodd"
                  cx="2"
                  cy="1"
                  r="1"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

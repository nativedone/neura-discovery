import * as React from "react"

export const FacebookIcon = (props) => (
  <svg
    xmlSpace="preserve"
    // width="1em"
    width={`${84.425/180.400}em`}
    viewBox="0 0 84.425 180.400"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={150.98}
      y1={277.753}
      x2={186.09}
      y2={277.753}
      gradientTransform="matrix(2.39842 0 0 2.39842 -362.162 -575.823)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#d26c19",
        }}
      />
      <stop
        offset={0.5}
        style={{
          stopColor: "#c20016",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#8f152e",
        }}
      />
    </linearGradient>
    <path
      d="M53.965 42.25V60.24h29.98L77.95 96.215H53.965V180.4H17.988V96.215H0V60.24h18.228V36.495S16.31 4.835 47.49.758c0 0 5.756-.96 17.269-.72 11.512.24 19.667 0 19.667 0v35.977H60.44c-.24.24-6.476-.48-6.476 6.236z"
      style={{
        fill: "url(#a)",
        strokeWidth: 2.39842,
      }}
    />
  </svg>
)



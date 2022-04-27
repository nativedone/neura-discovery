import * as React from "react"

export const YoutubeIcon = (props) => (
  <svg
    xmlSpace="preserve"
    width={`${252.312/180.400}em`}
    viewBox="0 0 252.312 180.400"
    height="1em"
    
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={173.84}
      y1={300.756}
      x2={438.06}
      y2={300.756}
      gradientTransform="matrix(.955 0 0 .955 -165.98 -197.017)"
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
      d="M199.5 0H52.907C23.684 0 0 23.684 0 52.907v74.586C0 156.716 23.684 180.4 52.907 180.4h146.498c29.223 0 52.907-23.684 52.907-52.907V52.907C252.407 23.684 228.723 0 199.5 0Zm-35.622 94.545-67.614 32.28c-2.1.954-4.488-.478-4.488-2.77v-66.85c0-2.292 2.483-3.82 4.584-2.77l67.614 34.476c2.292 1.146 2.196 4.488-.096 5.634z"
      style={{
        fill: "url(#a)",
        strokeWidth: 0.955003,
      }}
    />
  </svg>
)


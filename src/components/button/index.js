import { styled } from "@theme";

export const Button = styled("button", {
  
  paddingTop: "$x_4",
  paddingBottom: "$x_4",
  paddingLeft: "$x_2",
  paddingRight: "$x_2",

  border: "2px solid white",

  "@3": {
    paddingTop: "$x_8",
    paddingBottom: "$x_8",
    paddingLeft: "$x_2", 
    paddingRight: "$x_2" , 
  },

  color: 'white',
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  fontSize: "$3",
  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "white",
      color: "black",
    },
  },

  "+ button": {
    borderTop: "none",
  },

  fontSize: "$0", 
  "@8": {
  fontSize: "$3", 
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "rgba(0, 35, 63, 0.8)",
      },
      secondary: {
        backgroundColor: "transparent",
      },
    },
  },

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "white",
      color: "black",
    },
  },
});

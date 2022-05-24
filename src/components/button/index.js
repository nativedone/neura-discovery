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

  variants: {
    variant: {
      primary: {
        fontSize: "$0", 
        backgroundColor: "rgba(0, 35, 63, 0.8)",
        opacity: "80%", 
        "@8": {
          fontSize: "$3", 
        }    
      },
      secondary: {
        fontSize: "$0", 
        backgroundColor: "transparent",
        "@8": {
          fontSize: "$3", 
        }
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

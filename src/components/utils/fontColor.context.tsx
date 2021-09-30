import React from "react";

export const fontColor = {
  default: "#828282",
  error: "#9f3a38",
  header: "#2F80ED",
  taskName: "#333333",
  crashOuted: "#9EB7DA",
};

export const fontLink = {
  url:
    "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')",
  fontFamily: "font-family: 'Roboto', 'Verdana', sans-serif !important",
};

export const FontColorContext = React.createContext(
  fontColor.default // default value
);

import React from "react";

export const fontColor = {
  default: "#828282",
  error: "#9f3a38",
  header: "#2F80ED",
  taskName: "#333333",
  crashOuted: "#9EB7DA",
  segmentColor: "#6fcf97",
  btnBackground: "#E0ECFD",
  whiteBackground: "#FFFFFF",
  gridColor: "#eef3f6",
  redColor: "#ed2f2f",
  pColor: "#86a8d6",
};

export const fontLink = {
  url:
    "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')",
  fontFamily: "font-family: 'Roboto', 'Verdana', sans-serif !important",
};

export const FontColorContext = React.createContext(
  fontColor.default // default value
);

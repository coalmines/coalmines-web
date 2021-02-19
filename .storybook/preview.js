import _JSXStyle from "styled-jsx/style";
import "./global.css";

if (typeof global !== "undefined") {
  Object.assign(global, { _JSXStyle });
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

import React from "react";
import {
  backgroundColor,
  borderColor,
  textColor,
  horizontalPadding,
} from "../theme";

const Button = ({ children }) => {
  return (
    <>
      <button>{children}</button>
      <style jsx>{`
        button {
          position: relative;
          border: none;
          border-bottom: 2px solid transparent;
          background: ${backgroundColor};
          padding: 8px ${horizontalPadding} 6px;
        }
        button::before,
        button::after {
          position: absolute;
          top: 0;
          width: ${horizontalPadding};
          height: 100%;
          content: "";
        }
        button::before {
          left: 0;
          border-bottom: 2px solid ${borderColor};
          border-left: 1px solid ${borderColor};
        }
        button::after {
          right: 0;
          border-top: 2px solid ${borderColor};
          border-right: 1px solid ${borderColor};
        }
      `}</style>
    </>
  );
};

export default Button;

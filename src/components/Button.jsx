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
          height: 36px;
          position: relative;
          border: none;
          background: ${backgroundColor};
          padding: 8px ${horizontalPadding};
          border-top: 2px solid ${borderColor};
          border-bottom: 2px solid ${borderColor};
        }
        button::before,
        button::after {
          position: absolute;
          width: ${horizontalPadding};
          height: ${horizontalPadding};
          content: "";
        }
        button::before {
          bottom: 0;
          left: 0;
          border-left: 2px solid ${borderColor};
        }
        button::after {
          top: 0;
          right: 0;
          border-right: 2px solid ${borderColor};
        }
      `}</style>
    </>
  );
};

export default Button;

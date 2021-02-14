import React from "react";
import {
  backgroundColor,
  borderColor as regularBorderColor,
  textColor,
  horizontalPadding,
} from "../theme";

const Button = ({ onClick, children, small, disabled, active }) => {
  const borderColor = disabled
    ? "#505050"
    : active
    ? "#50C050"
    : regularBorderColor;
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
      <style jsx>{`
        button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          outline: none;
          height: ${small ? "30px" : "36px"};
          position: relative;
          border: none;
          background: ${backgroundColor};
          padding: 0 ${horizontalPadding};
          border-top: 2px solid ${borderColor};
        }
        button::before,
        button::after {
          position: absolute;
          width: ${horizontalPadding};
          height: 100%;
          content: "";
          border-bottom: 2px solid ${borderColor};
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

import React, { useState } from "react";
import { createPortal } from "react-dom";
import classnames from "classnames";
import {
  backgroundColor,
  borderColor,
  textColor,
  horizontalPadding,
} from "../theme";

const Boop = ({ onClick, small, children }) => {
  const [boop, setBoop] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          setBoop(true);
          window.setTimeout(() => setBoop(false), 200);
          onClick(e);
        }}
        className={classnames({ boop })}
      >
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
        @keyframes pew {
          0% {
            height: ${horizontalPadding};
          }
          50% {
            height: 100%;
          }
          100% {
            height: ${horizontalPadding};
          }
        }
        button.boop::after,
        button.boop::before {
          animation: pew 0.2s cubic-bezier(0.42, 0, 0.58, 1);
        }
      `}</style>
    </>
  );
};

export default Boop;

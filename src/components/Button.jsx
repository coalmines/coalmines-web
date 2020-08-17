import React from "react";

const Button = ({ children }) => {
  const backgroundColor = "#F4F4FC";
  const borderColor = "#3030C0";
  const textColor = "202020";
  return (
    <>
      <button>{children}</button>
      <style jsx>{`
        button {
          position: relative;
          border: none;
          border-bottom: 2px solid transparent;
          background: ${backgroundColor};
          padding: 8px 8px 6px 8px;
        }
        button::before,
        button::after {
          position: absolute;
          top: 0;
          width: 8px;
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

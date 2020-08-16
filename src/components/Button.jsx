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
          background: ${backgroundColor};
          padding: 6px 0;
        }
        button::before {
          content: "";
          padding: 6px 8px 6px 0;
          border-top: 2px solid ${borderColor};
          border-left: 1px solid ${borderColor};
        }
        button::after {
          content: "";
          padding: 6px 0 6px 8px;
          border-bottom: 2px solid ${borderColor};
          border-right: 1px solid ${borderColor};
        }
      `}</style>
    </>
  );
};

export default Button;
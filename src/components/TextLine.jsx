import React from "react";

const TextLine = ({ children, label = "" }) => {
  const backgroundColor = "#F4F4FC";
  const borderColor = "#3030C0";
  const textColor = "202020";
  return (
    <>
      <span className="text">
        {children}
        {label !== "" && <span className="label">{label}</span>}
      </span>
      <style jsx>{`
        .text {
          background: ${backgroundColor};
          position: relative;
          padding: 8px 8px 6px 8px;
          border-bottom: 2px solid ${borderColor};
          border-right: 1px solid ${borderColor};
        }
        .text::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 100%;
          content: "";
          content: "";
          border-top: 2px solid ${borderColor};
          border-left: 1px solid ${borderColor};
        }
        .label {
          font-size: 10px;
          position: absolute;
          left: 12px;
          top: -5px;
        }
      `}</style>
    </>
  );
};

export default TextLine;

import React, { useState } from "react";
import {
  backgroundColor,
  borderColor as regularBorderColor,
  textColor,
  horizontalPadding,
} from "../theme";

const TextLine = ({ children, label = "", active, onEdit }) => {
  const borderColor = active ? "#50C050" : regularBorderColor;
  const [value, setValue] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
    onEdit && onEdit(value);
  };
  return (
    <>
      <span className="border">
        <div className="text">{children}</div>
        {label !== "" && <span className="label">{label}</span>}
      </span>
      <style jsx>{`
        .text {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 0 ${horizontalPadding};
          font: 13px sans-serif;
        }
        .border {
          display: inline-block;
          position: relative;
          height: 30px;
          background: ${backgroundColor};
          border-bottom: 2px solid ${borderColor};
          border-left: 2px solid ${borderColor};
        }
        .border::before {
          position: absolute;
          top: 0;
          left: 0;
          width: ${horizontalPadding};
          height: 100%;
          border-top: 2px solid ${borderColor};
          display: inline-flex;
          align-items: center;
          font-size: 8px;
          content: "";
        }
        .label {
          width: calc(100% - ${horizontalPadding} + 2px);
          height: calc(${horizontalPadding} + 2px);
          border: 2px solid ${borderColor};
          border-bottom: 0;
          padding: 2px 6px;
          background: ${backgroundColor};
          font: 10px sans-serif;
          position: absolute;
          left: calc(${horizontalPadding} - 2px);
          top: -${horizontalPadding};
        }
      `}</style>
    </>
  );
};

export default TextLine;

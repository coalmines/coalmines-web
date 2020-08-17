import React, { useState } from "react";
import {
  backgroundColor,
  borderColor as regularBorderColor,
  textColor,
  horizontalPadding,
} from "../theme";

const TextLine = ({ children, label = "", active, input }) => {
  const borderColor = active ? "#50C050" : regularBorderColor;
  const [value, setValue] = useState("some input");
  const onChange = (e) => setValue(e.target.value);
  return (
    <>
      <span className="text">
        {(input && <input value={value} onChange={onChange} />) || children}
        {label !== "" && <span className="label">{label}</span>}
      </span>
      <style jsx>{`
        input {
          display: inline;
          width: 80px;
        }
        .text {
          position: relative;
          height: 20px;
          display: inline-flex;
          align-items: center;
          background: ${backgroundColor};
          padding: 16px ${horizontalPadding};
          border-bottom: 2px solid ${borderColor};
          border-left: 2px solid ${borderColor};
        }
        .text::before {
          position: absolute;
          top: 0;
          left: 0;
          width: ${horizontalPadding};
          height: 100%;
          content: "";
          content: "";
          border-top: 2px solid ${borderColor};
        }
        .label {
          font-size: 10px;
          position: absolute;
          left: 16px;
          top: -5px;
        }
      `}</style>
    </>
  );
};

export default TextLine;

import React from "react";
import { backgroundColor, colors, horizontalPadding } from "../theme";

export const types = {
  hint: 0,
  success: 1,
  warning: 2,
};

const colorByType = (type) => {
  switch (type) {
    case types.warning:
      return colors.warning;
    case types.success:
      return colors.success;
    default:
      return colors.hint;
  }
};

const Infobar = ({ type, children }) => {
  const color = colorByType(type);
  return (
    <div className="info">
      {children}
      <style jsx>{`
        .info {
          border: 4px solid ${color};
          background: ${backgroundColor};
          padding: ${horizontalPadding};
          display: flex;
          align-items: center;
          font: bold 16pt sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Infobar;

import React, { useState } from "react";

const inc = 15;

const Gauge = ({ color = "#706050" }) => {
  const [angle, setAngle] = useState(42);
  const incAngle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (angle + inc > 360) {
      setAngle(inc);
    }
    setAngle(angle + inc);
  };
  return (
    <>
      <div className="outer" onClick={incAngle}>
        <div className="gauge">
          <hr />
        </div>
      </div>
      <style jsx>{`
        .outer {
          width: 60px;
          height: 60px;
          background-color: #f0f0f0;
          border-radius: 100%;
          overflow: hidden;
        }
        .gauge {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          transform: rotate(${angle}deg);
        }
        hr {
          width: 50%;
          height: 2px;
          margin: 0;
          color: ${color};
        }
      `}</style>
    </>
  );
};

export default Gauge;

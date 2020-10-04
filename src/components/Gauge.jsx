import React, { useState, useEffect, useRef } from "react";

const getPosition = (element) => {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
};

const Gauge = ({ color = "#706050" }) => {
  const [angle, setAngle] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const elementRef = useRef();
  const position = useRef({ x: 0, y: 0 });

  const mouseDownHandler = () => {
    setMouseDown(true);
  };
  const mouseLeave = () => {
    setMouseDown(false);
  };
  const mouseMoveHandler = (e) => {
    if (mouseDown) {
      const { x, y } = position.current;
      const ang = Math.atan2(e.clientY - y, e.clientX - x) / Math.PI + 1;
      setAngle(ang * 180 - 180);
    }
  };
  useEffect(() => {
    position.current = getPosition(elementRef.current);
  }, []);

  return (
    <>
      <div
        ref={elementRef}
        className="outer"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseLeave}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeave}
      >
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

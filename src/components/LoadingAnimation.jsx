import React from "react";

const LoadingAnimation = ({ children, type = "spinner", duration = "2s" }) => {
  return (
    <>
      <div className={type}>{children}</div>
      <style jsx>{`
        @keyframes spinner {
          100% {
            transform: rotate(360deg);
          }
        }
        .spinner {
          text-align: center;
          animation: spinner ${duration} infinite linear;
        }
        @keyframes seesaw {
          0% {
            transform: rotate(30deg);
          }
          50% {
            transform: rotate(-30deg);
          }
          100% {
            transform: rotate(30deg);
          }
        }
        .seesaw,
        .gigagampfa {
          text-align: center;
          animation: seesaw ${duration} infinite ease-in-out;
        }
        @keyframes swing {
          0% {
            transform: rotate(-60deg);
          }
          50% {
            transform: rotate(-120deg);
          }
          100% {
            transform: rotate(-60deg);
          }
        }
        .swing {
          animation: swing ${duration} infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default LoadingAnimation;

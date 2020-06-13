import React from 'react';

const LoadingAnimation = ({ children, type = "spinner" }) => {
  return (
    <>
      <div className={type}>{children}</div>
      <style jsx>{`
        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(359deg);
          }
        }
        .spinner {
          text-align: center;
          animation: spinner 2s infinite linear;
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
        .seesaw, .gigagampfa {
          text-align: center;
          animation: seesaw 2s infinite ease-in-out;
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
          animation: swing 2s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}

export default LoadingAnimation;

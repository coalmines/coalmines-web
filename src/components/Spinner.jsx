import React from 'react';

const Spinner = ({ children, type = "spin" }) => {
  return (
    <>
      <div className={type}>{children}</div>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(359deg);
          }
        }
        .spin {
          text-align: center;
          animation: spin 2s infinite linear;
        }
        @keyframes swing {
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
        .swing {
          text-align: center;
          animation: swing 2s infinite ease-in-out;
        }
        @keyframes pendulum {
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
        .pendulum {
          animation: pendulum 2s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}

export default Spinner;

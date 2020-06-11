import React from 'react';

const Spinner = () => {
  return (
    <>
      <div className="spin">Waiting for data...</div>
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
          width: 50%;
          margin-top: 100px;
          animation: spin 2s infinite linear;
        }
      `}</style>
    </>
  );
}

export default Spinner;

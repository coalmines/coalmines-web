import React, { useState } from 'react';

const Data = () => {
  return <p>I have some beautiful data.</p>;
}

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

export default () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3400);
  return (
    <div>
      <h1>Hello!</h1>
      {loading ? <Spinner /> : <Data />}
    </div>
  );
};

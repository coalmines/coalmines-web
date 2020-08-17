import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        html {
          box-sizing: border-box;
        }
        body {
          color: #080808;
          font-size: 12px;
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
      `}</style>
    </>
  );
}

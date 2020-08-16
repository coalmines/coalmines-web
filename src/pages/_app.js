import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx>{`
        html {
          box-sizing: border-box;
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

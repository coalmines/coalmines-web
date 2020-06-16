import React, { useState } from "react";
import Data from "../components/Data";
import Gauge from "../components/Gauge";
import LoadingAnimation from "../components/LoadingAnimation";

export default () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3400);
  return (
    <div>
      <h1>Hello!</h1>
      {loading ? <LoadingAnimation>Loading...</LoadingAnimation> : <Data />}
      <div className="widgets">
        <div className="widget">
          <h3>Gorgeous Gauge</h3>
          <div className="center">
            <Gauge />
          </div>
        </div>
        <div className="widget">
          <h3>Spinner</h3>
          <div className="center">
            <div className="spinner">
              <LoadingAnimation type="spinner">
                <div>You spin my head</div>
                🙂
                <div>right round...</div>
              </LoadingAnimation>
            </div>
          </div>
        </div>
        <div className="widget">
          <h3>Seesaw</h3>
          <div className="center">
            <div className="seesaw">
              <LoadingAnimation type="gigagampfa" duration="2.8s">
                <span className="flex">
                  <div>x</div>
                  <div>x</div>
                </span>
                <hr />
              </LoadingAnimation>
            </div>
          </div>
        </div>
        <div className="widget">
          <h3>Swing</h3>
          <div className="center">
            <div className="swing">
              <LoadingAnimation type="swing" duration="3.2s">
                tic
                <hr />
                toc
              </LoadingAnimation>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .widgets {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 60px;
          }
          .widget {
            max-width: 320px;
            height: 120px;
            margin: 10px 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #cfcfcf;
            padding: 12px;
          }
          h3 {
            margin-right: 20px;
          }
          .center {
            display: flex;
            justify-content: center;
            flex: 1;
          }
          .widget .spinner {
            width: 45%;
          }
          .widget .seesaw {
            width: 60%;
          }
          .widget .swing {
            width: 50%;
          }
          .flex {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  );
};

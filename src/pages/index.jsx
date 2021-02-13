import React, { useState } from "react";
import Data from "../components/Data";
import Gauge from "../components/Gauge";
import TextLine from "../components/TextLine";
import Boop from "../components/Boop";
import Button from "../components/Button";
import LoadingAnimation from "../components/LoadingAnimation";
import Tabs from "../components/Tabs";
import menu from "../fixtures/menu.json";

export default () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3400);
  return (
    <div>
      <h1>Hello!</h1>
      {loading ? <LoadingAnimation>Loading...</LoadingAnimation> : <Data />}
      <h2>Controls</h2>
      <div className="widgets">
        <div className="widget">
          <h3>Buttons</h3>
          <div className="flex column">
            <Button>Buttons are nice</Button>
            <Button disabled>have another</Button>
          </div>
        </div>
        <div className="widget">
          <h3>Boop</h3>
          <div className="flex column">
            <Boop>Boop!</Boop>
            <Boop small>Small Boop!</Boop>
          </div>
        </div>
        <div className="big widget">
          <h3>Tabs</h3>
          {loading ? (
            <div className="flex center">
              <LoadingAnimation type="gigagampfa" duration="2.8s">
                Loading...
              </LoadingAnimation>
            </div>
          ) : (
            <Tabs menu={menu} />
          )}
        </div>
        <div className="widget big">
          <h3>TextLine</h3>
          <div className="flex column">
            <TextLine>regular text</TextLine>
            <TextLine input>a text line</TextLine>
            <TextLine label="woop woop">a labeled text</TextLine>
            <TextLine label="yeehaw" input>
              a labeled input
            </TextLine>
          </div>
        </div>
        <div className="widget">
          <h3>Combined Input + Boop</h3>
          <div className="flex column">
            <div className="flex">
              <TextLine input label="ask" placeholder="Enter question">
                a text line
              </TextLine>
              <Boop small>Go!</Boop>
            </div>
            <div className="flex">
              <TextLine input label="answer" placeholder="How much?">
                42
              </TextLine>
              <Boop>Okay</Boop>
            </div>
          </div>
        </div>
        <div className="widget">
          <h3>Gorgeous Gauge</h3>
          <div className="center">
            <Gauge />
          </div>
        </div>
      </div>
      <h2>Animations</h2>
      <div className="widgets">
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
              <LoadingAnimation type="seesaw" duration="2.8s">
                <span className="flex">
                  <div>x</div>
                  <div>x</div>
                </span>
                <hr />
              </LoadingAnimation>
            </div>
          </div>
        </div>
        <div className="big widget">
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
            margin-top: 10px;
          }
          .widget.big {
            height: 240px;
            max-width: 400px;
          }
          .widget {
            max-width: 320px;
            height: 120px;
            margin: 10px 15px;
            display: flex;
            justify-content: space-between;
            background-color: #cfcfcf;
            padding: 12px;
          }
          h3 {
            margin-right: 20px;
          }
          .center {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
          }
          .widget .spinner {
            width: 45%;
          }
          .widget .seesaw {
            width: 60%;
          }
          .widget .swing {
            width: 60%;
          }
          .flex {
            display: flex;
            justify-content: space-between;
          }
          .column {
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};

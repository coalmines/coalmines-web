import React, { useState } from "react";
import Data from "../components/Data";
import Gauge from "../components/Gauge";
import TextLine from "../components/TextLine";
import Button from "../components/Button";
import LoadingAnimation from "../components/LoadingAnimation";

const menu = [
  {
    id: "menu1",
    label: "menu 1",
    text: `
Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
`,
  },
  {
    id: "menu2",
    label: "menu 2",
    text: `
Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
`,
  },
  {
    id: "menu3",
    label: "menu 3",
    text: `
Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
`,
  },
];

const Card = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="card">
        <ul>
          {menu.map(({ id, label }, i) => (
            <li key={id} onClick={() => setActiveTab(i)}>
              <TextLine active={i === activeTab}>{label}</TextLine>
            </li>
          ))}
        </ul>
        <div className="card-body">{menu[activeTab].text}</div>
      </div>
      <style jsx>{`
        .card {
          width: 100%;
          background-color: #f0f0f0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .card-body {
          padding: 10px;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }
        li {
          display: inline;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};

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
          <div className="flex center">
            <Button>Buttons are nice</Button>
            <Button disabled>have another</Button>
          </div>
        </div>
        <div className="big widget">
          <h3>Card with Tabs</h3>
          {loading ? (
            <div className="flex center">
              <LoadingAnimation type="gigagampfa" duration="2.8s">
                Loading...
              </LoadingAnimation>
            </div>
          ) : (
            <Card />
          )}
        </div>
        <div className="widget">
          <h3>TextLine</h3>
          <div className="flex center">
            <TextLine input>a text line</TextLine>
            <TextLine label="woop woop">a labeled text</TextLine>
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
            width: 80%;
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

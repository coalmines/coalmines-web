import React, { useState } from "react";
import TextLine from "./TextLine";

const Tabs = ({ menu }) => {
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
        <div className="card-body">{menu[activeTab].body}</div>
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

export default Tabs;

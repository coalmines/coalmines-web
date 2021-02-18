import React from "react";
import LoadingAnimation from "../components/LoadingAnimation";

export default {
  component: LoadingAnimation,
  title: "Components/LoadingAnimation",
};

export const regular = () => (
  <div style={{ height: 50, width: 50 }}>
    <LoadingAnimation>⚙️</LoadingAnimation>
  </div>
);

export const seesaw = () => (
  <div style={{ height: 50, width: 50 }}>
    <LoadingAnimation type="seesaw" duration="3.0s">
      ⚙️⚙️
    </LoadingAnimation>
  </div>
);

export const swing = () => (
  <div style={{ height: 35, width: 90 }}>
    <LoadingAnimation type="swing">
      <div>⚙️ wheee</div>
    </LoadingAnimation>
  </div>
);

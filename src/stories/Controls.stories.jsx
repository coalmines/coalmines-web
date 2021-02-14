import React from "react";
import Boop from "../components/Boop";
import Input from "../components/Input";

export default {
  title: "Combined/Controls",
};

export const regular = () => (
  <span style={{ display: "flex" }}>
    <Input />
    <Boop>Go for it!</Boop>
  </span>
);

export const small = () => (
  <span style={{ display: "flex" }}>
    <Input />
    <Boop small>Go go go!</Boop>
  </span>
);

export const labled = () => (
  <span style={{ display: "flex" }}>
    <Input label="somwhere" placeholder="over the rainbow" />
    <Boop small>Go go go!</Boop>
  </span>
);

import React from "react";
import Boop from "../components/Boop";

export default {
  component: Boop,
  title: "Components/Boop",
};

export const regular = () => <Boop>regular boop</Boop>;

export const small = () => <Boop small>small boop</Boop>;

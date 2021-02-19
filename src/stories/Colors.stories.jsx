import React from "react";
import Infobar, { types } from "../components/Infobar";

export default {
  component: Infobar,
  title: "Components/Infobar",
};

export const hint = () => <Infobar type={types.hint}>This is a hint.</Infobar>;

export const success = () => (
  <Infobar type={types.success}>This is success.</Infobar>
);

export const warning = () => (
  <Infobar type={types.warning}>This is a warning.</Infobar>
);

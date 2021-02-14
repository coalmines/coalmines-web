import React from "react";
import Tabs from "../components/Tabs";
import menu from "../fixtures/menu.json";

export default {
  component: Tabs,
  title: "Components/Tabs",
};

export const tabs = () => <Tabs menu={menu} />;

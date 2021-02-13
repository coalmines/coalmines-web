import React from "react";
import TextLine from "../components/TextLine";

export default {
  component: TextLine,
  title: "Components/TextLine",
};

export const regular = () => <TextLine>regular text</TextLine>;

export const labeled = () => (
  <TextLine label="woop woop">a labeled text</TextLine>
);

import React from "react";
import TextLine from "../components/TextLine";

export default {
  component: TextLine,
  title: "Components/TextLine",
};

export const regular = () => <TextLine>regular text</TextLine>;

export const input = () => <TextLine input>a text line</TextLine>;

export const labeled = () => (
  <TextLine label="woop woop">a labeled text</TextLine>
);

export const labeledInput = () => (
  <TextLine label="yeehaw" input>
    a labeled input
  </TextLine>
);

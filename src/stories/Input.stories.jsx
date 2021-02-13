import React from "react";
import Input from "../components/Input";

export default {
  component: Input,
  title: "Components/Input",
};

export const regular = () => <Input>regular text</Input>;

export const labeled = () => <Input label="woop woop">a labeled input</Input>;

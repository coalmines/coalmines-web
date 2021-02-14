import React from "react";
import Button from "../components/Button";

export default {
  component: Button,
  title: "Components/Button",
};

export const regular = () => <Button>regular button</Button>;

export const small = () => <Button small>small button</Button>;

export const active = () => <Button active>active button</Button>;

export const disabled = () => <Button disabled>active button</Button>;

export const multiple = () => (
  <>
    <Button>one</Button>
    <Button active>two</Button>
    <Button>three</Button>
    <Button disabled>four</Button>
    <Button>five</Button>
  </>
);

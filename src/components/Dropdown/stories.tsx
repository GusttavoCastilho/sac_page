import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Dropdown, { DropdownProps } from ".";

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    title: {
      type: "string",
    },
    children: {
      type: "string",
    },
  },
} as Meta;

export const Default: Story<DropdownProps> = () => (
  <Dropdown title="O catálogo é grátis?">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus.
    Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a
    consectetur volutpat,
  </Dropdown>
);

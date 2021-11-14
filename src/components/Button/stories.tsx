import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    icon: {
      type: "",
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <Button {...args}>Seja um franqueado</Button>
);

export const WithIcon: Story = (args) => (
  <Button {...args}>Seja um franqueado</Button>
);

WithIcon.args = {
  icon: "/icons/editar.png",
};

export const WithMinimal: Story = (args) => (
  <Button {...args} minimal>
    Seja um franqueado
  </Button>
);

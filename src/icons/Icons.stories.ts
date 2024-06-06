import { Meta, StoryObj } from "@storybook/react";
import { Icons } from "./Icons";

const meta = {
  title: "Components/Icons",
  component: Icons,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

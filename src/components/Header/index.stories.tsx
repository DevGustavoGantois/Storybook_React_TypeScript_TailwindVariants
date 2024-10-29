import { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta: Meta<typeof Header> = {
    title: "Components/Header",
    component: Header,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>

export const Solid: Story = {
    args: {
        size: "xl",
        colorscheme: "primary",
        variant: "solid"
    }
}

export const Outline: Story = {
    args: {
        size: "lg",
        colorscheme: "primary",
        variant: "outline"
    }
}

export const Ghost: Story = {
    args: {
        size: "md",
        colorscheme: "primary",
        variant: "ghost"
    }
}

export const Animation: Story = {
    args: {
        size: "xl",
        colorscheme: "primary",
        variant: "animation"
    }
}
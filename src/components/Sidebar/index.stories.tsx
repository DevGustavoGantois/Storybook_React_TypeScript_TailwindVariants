import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '.';

const meta: Meta<typeof Sidebar> = {
    title: "Components/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>

export const Solid: Story = {
    args: {
        size: "sm",
        colorscheme: "primary",
        variant: "solid",
        children: "Solid"
    }
}

export const Outline: Story = {
    args:{
        size: "md",
        colorscheme: "primary",
        variant: "outline",
        children: "Outline"
    }
}


export const Ghost: Story = {
    args: {
        size: "lg",
        colorscheme: "primary",
        variant: "ghost",
        children: "Ghost"
    }
}

export const Animation: Story = {
    args: {
        size: "xl",
        colorscheme: "primary",
        variant: "animation",
        children: "Animation"
    }
}
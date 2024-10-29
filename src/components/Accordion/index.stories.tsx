import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";


const meta: Meta<typeof Accordion> = {
    title: "Components/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof Accordion>;


export const Solid: Story = {
    args: {
        variant: "solid",
        size: "sm",
        colorscheme: "primary",
        question: "Do you speak English now?",
        answer: "I speak English now."
    }
}

export const Outline: Story = {
    args: {
        variant: "outline",
        size: "md",
        colorscheme: "primary",
        question: "Do you speak French now?",
        answer: "I don’t speak French now."
    }
}

export const Ghost: Story = {
    args: {
        variant: "ghost",
        size: "lg",
        colorscheme: "primary",
        question: "Do you speak Portuguese now?",
        answer: "I speak Portuguese now."
    }
}

export const Animation: Story = {
    args: {
        variant: "animation",
        size: "xl",
        colorscheme: "primary",
        question: "Where are you from?",
        answer: "Hi! I'm from Brazil."
    }
}
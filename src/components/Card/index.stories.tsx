import { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";


const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"]
} 

export default meta;

type Story = StoryObj<typeof meta>

export const Solid: Story = {
    args: {
        size: "xl",
        colorscheme: "primary",
        variant: "solid",
        children: "Card Solid",
        description: "Conteúdo do card modificavel, escreva o que você quiser."
    }
};

export const Outline: Story = {
    args: {
        size: "lg",
        colorscheme: "primary",
        variant: "outline",
        children: "Card Outline",
        description: "Conteúdo do card modificavel, escreva o que você quiser."
    }
};


export const Ghost: Story = {
    args: {
        size: "md",
        colorscheme: "primary",
        variant: "ghost",
        children: "Card Ghost",
        description: "Conteúdo do card modificavel, escreva o que você quiser."
    }
};

export const Animation: Story = {
    args: {
        size: "sm",
        colorscheme: "primary",
        variant: "animation",
        children: "Card Animation",
        description: "Conteúdo do card modificavel, escreva o que você quiser."
    }
}
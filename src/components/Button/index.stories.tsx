import type {Meta, StoryObj} from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Button Default',
        variant: "solid",
        size: "md",
        colorscheme: "primary",
    }
}

export const Solid: Story = {
    args: {
        variant: "solid",
        children: "Solid Button"
    }
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Outline Button"
    }
}

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Ghost Button"
    }
}

export const ButtonAnimation: Story = {
    args: {
        variant: "animation",
        children: "Button Animation"
    }
}
import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
    args: {
        type: "text",
        placeholder: "Insert your text here",
    }
}

export const InputPassword: Story = {
    args: {
        type: "password",
        placeholder: "Enter your password",
    }
}

export const InputNumber: Story = {
    args: {
        type: "number",
        placeholder: "Enter your number"
    }
}

export const InputDate: Story = {
    args: {
        type: "date",
        placeholder: "Insert your date here"
    }
};

export const InputEmail:  Story = {
    args: {
        type: "email",
        placeholder: "Enter your e-email here"
    }
}
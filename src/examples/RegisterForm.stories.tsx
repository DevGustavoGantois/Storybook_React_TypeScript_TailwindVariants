import { Meta, StoryObj } from "@storybook/react";
import { RegisterForm } from "./RegisterForm";


const meta: Meta<typeof RegisterForm> = {
    title: "Examples/RegisterForm",
    component: RegisterForm,
    parameters: {
        layout: "centered",
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Register: Story = {
    
}
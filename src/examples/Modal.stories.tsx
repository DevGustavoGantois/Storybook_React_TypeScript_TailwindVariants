import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";


const meta: Meta<typeof Modal> = {
    title: "Examples/Modal",
    component: Modal,
    argTypes: {
        isOpen: {control: "boolean"},
        title: {control: "text"},
    },
    parameters: {
        layout: "centered",
    }
};


export default meta;

type Story = StoryObj<typeof meta>;

export const OpenModal: Story = {
    args: {
        isOpen: true,
        title: "Example Modal",
        onClose: () => alert("Modal closed")
    }
}

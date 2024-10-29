import { Box, Stack } from "@components/_Layout"
import { Input, Button, Text } from "@components"

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({title, isOpen, onClose, ...props}) => {
    if (!isOpen) {
        return null;
    }


    return (
        <Box className="py-12 px-8 bordere border-gray-300 rounded-xl" {...props}>
        <Stack className="p-8 border border-blue-400 rounded-xl">
            <Text as={"span"} size={"2xl"} weight={"semibold"} align={"center"} className="mb-6">Modal</Text>
            <Text as={"span"} weight={"normal"} className="mb-1">New Username</Text>
            <Input placeholder="Enter your new username" id="NewUser" type="text" className="mb-4" />
            <Text as={"span"} weight={"normal"} className="mb-1">New Password</Text>
            <Input placeholder="Enter your new password" id="NewPass" type="password" className="mb-4" />
            <div className="flex gap-2 justify-center items-center mt-2">
            <Button variant={"solid"}>Send</Button>
            <Button variant={"ghost"}>Close</Button>
            </div>
        </Stack>
        </Box>
    )
}
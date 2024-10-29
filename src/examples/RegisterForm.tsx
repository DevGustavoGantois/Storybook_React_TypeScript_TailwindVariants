import { Box, Stack } from "@components/_Layout";
import { Button, Input } from "@components";
import { Text } from "@components";

export const RegisterForm = () => {
    return (
        <Box className="px-8 py-12 border border-gray-300 rounded-xl">
            <Stack>
                <Text as={"span"} align={"center"} weight={"bold"} size={"3xl"} className="mb-8">Register</Text>
                <Text as={"span"} align={"center"} weight={"thin"}>Please register your account on our system</Text>
                <Text as={"span"} align={"left"} weight={"normal"} className="mt-8 mb-1">Email</Text>
                <Input type="email" id="email" placeholder="Email" className="mb-4"/>
                <Text as={"span"} align={"left"} weight={"normal"} className="mb-1">Name</Text>
                <Input type="text" id="name" placeholder="Enter your name" className="mb-4" />
                <Text as={"span"} align={"left"} weight={"normal"} className="mb-1">Surname</Text>
                <Input type="text" id="surname" placeholder="Enter your surname" className="mb-4" />
                <Text as={"span"} align={"left"} weight={"normal"} className="mb-1">Username</Text>
                <Input type="text" id="username" placeholder="Username" className="mb-4" />
                <Text as={"span"} align={"left"} weight={"normal"} className="mb-1">Phone number</Text>
                <Input type="number" id="number" placeholder="(+55) 71 9999-9999" className="mb-4" />
                <Text as={"span"} align={"left"} weight={"normal"} className="mb-1">Password</Text>
                <Input type="password" id="password" placeholder="**** **** ****" className="mb-4" />
                <Text as={"span"} align={"left"} weight={"normal"} className="mb-1">Confirm password</Text>
                <Input type="password" id="password" placeholder="**** **** ****" className="mb-4" />
                <Text as={"span"} align={"right"} weight={"underline"} className="mb-4">Do you already have an account? <a className="font-semibold">Login</a></Text>
                <Button variant={"solid"}>Register</Button>
            </Stack>
        </Box>
    )
} 
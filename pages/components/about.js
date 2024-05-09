import { Container, Text, Stack, Typography} from '@mantine/core';


export default function About(){

    return(
        <Container p={0} style={{ height: '70vh' }}>
            <Stack pr={50} h={100} align="flex-start" justify="flex-start" gap="md">
                <Text tt="uppercase" size="sm" fw={400}>What is Walrus?</Text>
                <Text fw={700} size = "lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text> 
            </Stack>
        </Container>
    )

}

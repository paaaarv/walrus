import { Container, Stack, Text } from '@mantine/core';



export default function Intro(){
    return(
    
        <Container h="100vh">
            <Stack ta="center" m = "auto" pt={100} > 
                <h1 style={{color: "#4A6D8C", fontSize: '3rem'}} > Lorem ipsum dolor sit amet, </h1>
                    <h1 style={{ marginTop: 0, marginLeft: '50px', fontSize: '3rem', color: "#89ABD9"}}>consectetur adipiscing elit. </h1>
            </Stack>
        </Container>
    )
}
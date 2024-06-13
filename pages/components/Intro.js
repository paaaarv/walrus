import { Container, Stack, Text, Button } from '@mantine/core';



export default function Intro(){
    return(
    
        <Container h="100vh">
            <Stack justify="center" ta="center" m = "auto" pt={250}> 
                <h1 style={{ fontFamily: 'Montserrat, sans-serif', color: "#4A6D8C", marginBottom: 0, fontSize: '4rem', letterSpacing: '1px'}} > Tempus imperdiet nulla  </h1>
                <h1 style={{ fontFamily: 'Montserrat, sans-serif',  marginBottom: '10px', marginTop: '-25px', fontSize: '4rem', letterSpacing: '1px', color: "#89ABD9"}}>fermentum iaculis eu non </h1>
                <Text style={{color: "#012611", fontSize: '1.5rem', fontFamily: 'Roboto, sans-serif'}}> Diam volutpat commodo sed egestas egestas fringilla </Text>
                <Button mt="50px" m="auto" variant="outline" color="#012611" radius="xl" size="lg">Learn More</Button>
            </Stack>
            
        </Container>
    )
}
import { Container, Group, Text, Stack, Paper, Image} from '@mantine/core';
import classes from '../../public/css/styles.module.css';


export default function About(){

    return(
        <Container p={0} style={{ marginTop: '1em', width: '100%' }} >
            <Paper className={classes.about} h="80vh">
                <Stack pt = {100} pl = {10} pr={300} align="flex-start" justify="flex-start" gap="md">
                    <Text c="#012611" tt="uppercase" size="md" fw={400}>What is Walrus?</Text>
                    <h2 fw={700} style={{color: "#4A6D8C"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2> 
                </Stack>
                <Group justify="space-evenly" mt={150}>
                    <Image h="100px" src="/images/analysis.png"></Image>
                    <Image h="100px" src ="/images/dashboard.png"></Image>
                    <Image h="100px" src="/images/data.png"></Image>
                </Group>
            </Paper>
        </Container>
    )

}

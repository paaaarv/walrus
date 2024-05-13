import { NavLink, Container,Grid, Flex, Text, Group,Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../../public/css/styles.module.css';


export default function Navigation(){
    const [opened, { toggle } ] = useDisclosure(false);

    return(
        <Container h={100}>
            <Grid style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'white', zIndex: 100 }}>
                <Group style = {{ width: '100%', padding: '25px 20px', flexWrap: 'nowrap' }} >
                    <Grid.Col span={8}>
                        <Text className={classes.navigation} size="lg">Walrus</Text>
                    </Grid.Col>
                   
                    <Grid.Col span={4} style= {{ textAlign: 'right'}}>

                      <Burger  size= "sm" opened = {opened} onClick = {toggle} aria-label="Toggle navigation"/>
                    </Grid.Col>
                </Group>
            </Grid>
            <Flex w="80%" ml={4}>
                <NavLink m="auto" maw={150} label="Features"/>
                <NavLink m="auto" maw={150} label="Solutions"/>
                <NavLink m="auto"  maw={150} label="Pricing"/>
                <NavLink m="auto" maw={150} label="Contact Us"/>
            </Flex>

        </Container>
    )
}
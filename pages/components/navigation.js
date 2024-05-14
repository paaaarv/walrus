import { NavLink, Container,Grid, Flex, Text, Group,Burger, Transition , Paper} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../../public/css/styles.module.css';


export default function Navigation(){
    const [opened, { toggle } ] = useDisclosure(false);

    return(
        <Container h={100}>
            <Grid style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'white', zIndex: 300 }}>
                <Group style = {{ width: '100%', padding: '25px 20px', flexWrap: 'nowrap' }} >
                    <Grid.Col span={8}>
                        <Text className={classes.navigation} size="lg">Walrus</Text>
                    </Grid.Col>
                   
                    <Grid.Col span={4} style= {{ textAlign: 'right'}}>
                      <Burger className={classes.burger} size= "sm" opened = {opened} onClick = {toggle} aria-label="Toggle navigation"/>
                      
                       <Transition
                            mounted={opened}
                            transition= "pop-top-right"
                            duration= {600}
                            timingFunction="ease">
                                {(styles) => (
                            <div className={classes.navContainer} 
                                style={{ ...styles, zIndex: 500 }}>
                            <Paper 
                                shadow="xs" padding="md" h="75vh"
                                
                            >
                                <Group direction="column" spacing="sm">
                                <NavLink label= "Home" href="#"></NavLink>
                                <NavLink label= "About" href="#"></NavLink>
                                <NavLink label= "Features" href="#"></NavLink>
                                <NavLink label= "Pricing"  href="#"></NavLink>
                                <NavLink label="Contact" href="#"></NavLink>
                                </Group>
                            </Paper>
                            </div>
                                )}
                        </Transition>
                       
                  
                   
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
import { NavLink, Container,Grid, Flex, Text, Group,Burger, Transition , Paper} from '@mantine/core';
import { useDisclosure, useClickOutside } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import classes from '../../public/css/styles.module.css';



export default function Navigation(){
    const [opened, { toggle } ] = useDisclosure(false);
    const ref = useClickOutside(() => toggle());
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
  
      handleResize(); // Check initial window size
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return(
        <Container h='60px'>
            <Grid className={classes.navigation} style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 300 }}>
                <Group style = {{ width: '100%', padding: '15px 5px', flexWrap: 'nowrap' }} >
                    <Grid.Col span={2}>
                        <h2 style={{margin: '0', marginLeft: '20px'}} >Walrus</h2>
                    </Grid.Col>
                   
                    {isMobile ? 
                    <Grid.Col span={10} style= {{ textAlign: 'right'}} ref={ref}>
                      <Burger className={classes.burger} size= "sm" opened = {opened} 
                      onClick =  {toggle} 
                       aria-label="Toggle navigation"/>
                       <Transition
                            visible={opened}
                            mounted={opened}
                            transition= "pop-top-right"
                            duration= {600}
                            timingFunction="ease">
                                {(styles) => (
                            <div className={classes.navContainer} 
                                style={{ ...styles, zIndex: 500 }}
                                
                            >
                            <Paper 
                                shadow="xs" padding="md" h="50vh" w="100vw" bg="#B3D5F2" p="0"
                                
                            >
                                <Group direction="column" spacing="md" p="0">
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
                        : 
                    <Grid.Col span = {10}>
                        <Group className = {classes.expandedNav} direction="row" gap="sm" preventGrowOverflow={true} wrap="nowrap">
                                <NavLink display="inline-block" label= "Home" href="#"></NavLink>
                                <NavLink display="inline-block"  label= "About" href="#"></NavLink>
                                <NavLink display="inline-block"  label= "Features" href="#"></NavLink>
                                <NavLink display="inline-block"  label= "Pricing"  href="#"></NavLink>
                                <NavLink display="inline-block"  label="Contact" href="#"></NavLink>
                        </Group>
                    </Grid.Col>
                    }
                      
                </Group>
            </Grid>
        </Container>
    )
}
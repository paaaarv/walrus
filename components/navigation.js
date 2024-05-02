import { NavLink, Container, Flex, Group } from '@mantine/core';


export default function Navigation(){

    return(
        <Flex p={10} h={100}>
            <NavLink maw={100} label="WALRUS"/>
            <Flex w="80%" ml={4}>
                <NavLink m="auto" maw={150} label="Features"/>
                <NavLink m="auto" maw={150} label="Solutions"/>
                <NavLink m="auto"  maw={150} label="Pricing"/>
                <NavLink m="auto" maw={150} label="Contact Us"/>
            </Flex>
        </Flex>
    )
}
import React from 'react';
import profile from '../images/profile.jpg';
import { Center, Text, Image, Box, Button, HStack, Divider } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const SideBar = (props: { backgroundColor: any; }) => {
    return (
        <SideBarWrap position={{ lg: 'fixed', md: 'relative' }} backgroundColor={props.backgroundColor}>
            <Box flexShrink={0}>
                <Image
                    src={profile}
                    alt='Masaki Asanuma'
                    borderRadius='full'
                    width={{ base: '300px' }}
                />
            </Box>
            <Text fontSize={{ base: '5xl' }}>Masaki <Bold>Asanuma</Bold></Text>
            <Divider />
            <Text paddingTop='10px' fontSize={{ base: 'xl' }}><EmailIcon /> - masakiasanuma@outlook.com</Text>
            <HStack paddingTop='10px'>
                <Button
                    background='#0072B1'
                    _hover={{ bg: '#0050B1' }}
                    onClick={() => {
                        const win = window.open('https://www.linkedin.com/in/masakiasanuma/', '_blank')!;
                        win.focus();
                    }}
                >
                    <FaLinkedin size={20} />
                </Button>
                <Button
                    background='#333'
                    _hover={{ bg: '#222' }}
                    onClick={() => {
                        const win = window.open('https://github.com/Masasasaki', '_blank')!;
                        win.focus();
                    }}
                >
                    <FaGithub size={20} />
                </Button>
            </HStack>
        </SideBarWrap>
    )
};

const SideBarWrap = styled(Center)<{ backgroundColor: any }>`
    flex-direction: column;
    background: ${e => e.backgroundColor};
    color: white;
    height: 100vh;
    padding: 0px 20px 0px 20px;
    -webkit-transition: background 1s;
    transition: background 1s;
`;

const Bold = styled.span`
    font-weight: bold;
`;

export { SideBar };
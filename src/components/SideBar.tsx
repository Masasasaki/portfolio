import React from 'react';
import profile from '../images/profile.jpg';
import { Center, Text, Image, Box } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const SideBar = (props: { backgroundColor: any; }) => {
    return (
        <SideBarWrap backgroundColor={props.backgroundColor}>
            <Box flexShrink={0}>
                <Image
                    src={profile}
                    alt='Masaki Asanuma'
                    borderRadius='full'
                    width={{ base: '300px' }}
                />
            </Box>
            <Text fontSize={{ base: '5xl' }}>Masaki <Bold>Asanuma</Bold></Text>
            <Text fontSize={{ base: 'xl' }}><EmailIcon /> - masakiasanuma@outlook.com</Text>
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
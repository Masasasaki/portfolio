import React from 'react';
import profile from '../images/profile.jpg';
import { Center, Text, Image } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const SideBar = () => {
    return (
        <SideBarWrap>
            <Image
                src={profile}
                alt='Masaki Asanuma'
                borderRadius='full'
                boxSize='300px'
            />
            <Text fontSize='5xl'>Masaki <Bold>Asanuma</Bold></Text>
            <Text fontSize='xl'><EmailIcon /> - masakiasanuma@outlook.com</Text>
        </SideBarWrap>
    )
};

const SideBarWrap = styled(Center)`
    flex-direction: column;
    background: black;
    color: white;
    height: 100vh;
    padding: 0px 20px 0px 20px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

export { SideBar };
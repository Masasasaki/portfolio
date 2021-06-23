import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import styled from 'styled-components';
import { SideBar } from './components/SideBar';
import { AboutMe } from './components/sections/AboutMe';
import { Experience } from './components/sections/Experience';

const App = () => {
    const [sectionFlag, setSectionFlag] = useState('about');
    const [color, setColor] = useState('#6b34a4');
    return (
        <Box display={{ lg: 'flex' }}>
            <Box minW='375px'>
                <SideBar backgroundColor={color} />
            </Box>
            <AccessButtonWrap
                position={{ md: 'relative', lg: 'fixed' }}
                left={{ md: '0px', lg: '365px' }}
                height={{ md: '100%', lg: '100vh' }}
                flexDirection={{ lg: 'column' }}
            >
                <AccessButton
                    bg='#6b34a4'
                    variant='square' 
                    onClick={() => {
                        setSectionFlag('about');
                        setColor('#6b34a4');
                    }}
                >
                    About
                </AccessButton>
                <AccessButton
                    bg='#bc9adf'
                    variant='square'
                    onClick={() => {
                        setSectionFlag('experience');
                        setColor('#bc9adf');
                    }}
                >
                    Experience
                </AccessButton>
                <AccessButton
                    bg='#54143c'
                    variant='square'
                    onClick={() => {
                        setSectionFlag('education');
                        setColor('#54143c');
                    }}
                >
                    Education
                </AccessButton>
                <AccessButton
                    bg='#9d6886'
                    variant='square'
                    onClick={() => {
                        setSectionFlag('projects');
                        setColor('#9d6886');
                    }}
                >
                    Projects
                </AccessButton>
                <AccessButton
                    bg='#bc8cac'
                    variant='square'
                    onClick={() => {
                        setSectionFlag('skills');
                        setColor('#bc8cac');
                    }}
                >
                    Skills
                </AccessButton>
                <AccessButton
                    bg='#513846'
                    variant='square'
                    onClick={() => {
                        setSectionFlag('hobbies');
                        setColor('#513846');
                    }}
                >
                    Hobbies
                </AccessButton>
            </AccessButtonWrap>
            <Content ml={{ xl: 12 }}>
                {sectionFlag === 'about' && <AboutMe />}
                {sectionFlag === 'experience' && <Experience />}
            </Content>
        </Box>
    );
};

const AccessButtonWrap = styled(Box)`
    display: flex;
    align-items: stretch;
    justify-content: center;
    background: black;
`;

const AccessButton = styled(Button)`
    border-radius: 0px;
    color: white;
    flex-grow: 1;
`;

const Content = styled(Box)`
    margin-left: 100px;
`;

export default App;
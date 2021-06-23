import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import styled from 'styled-components';
import { SideBar } from './components/SideBar';
import { AboutMe } from './components/sections/AboutMe';
import { Experience } from './components/sections/Experience';

const App = () => {
    const [sectionFlag, setSectionFlag] = useState('about');
    return (
        <Box display={{ md: 'flex' }}>
            <Box>
                <SideBar />
            </Box>
            <AccessButtonWrap height={{ sm: '100%', md: '100vh' }} flexDirection={{ md: 'column' }}>
                <AccessButton
                    bg='#6b34a4'
                    variant='square' 
                    onClick={() => setSectionFlag('about')}
                >
                    About
                </AccessButton>
                <AccessButton
                    bg='#bc9adf'
                    variant='square'
                    onClick={() => setSectionFlag('experience')}
                >
                    Experience
                </AccessButton>
                <AccessButton
                    bg='#54143c'
                    variant='square'
                    onClick={() => setSectionFlag('education')}
                >
                    Education
                </AccessButton>
                <AccessButton
                    bg='#9d6886'
                    variant='square'
                    onClick={() => setSectionFlag('projects')}
                >
                    Projects
                </AccessButton>
                <AccessButton
                    bg='#bc8cac'
                    variant='square'
                    onClick={() => setSectionFlag('skills')}
                >
                    Skills
                </AccessButton>
                <AccessButton
                    bg='#513846'
                    variant='square'
                    onClick={() => setSectionFlag('hobbies')}
                >
                    Hobbies
                </AccessButton>
            </AccessButtonWrap>
            <Box ml={{ xl: 12 }}>
                {sectionFlag === 'about' && <AboutMe />}
                {sectionFlag === 'experience' && <Experience />}
            </Box>
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

export default App;
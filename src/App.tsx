import React, { useState, useEffect } from 'react';
import { Box, Button, SlideFade, useDisclosure } from '@chakra-ui/react';
import styled from 'styled-components';
import { SideBar } from './components/SideBar';
import { AboutMe } from './components/sections/AboutMe';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Hobbies } from './components/sections/Hobbies';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';

const App = () => {
    const [sectionFlag, setSectionFlag] = useState('about');
    const [color, setColor] = useState('#6b34a4');
    const { isOpen, onToggle } = useDisclosure();

    useEffect(onToggle, [sectionFlag]);

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
                        onToggle();
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
                        onToggle();
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
                        onToggle();
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
                        onToggle();
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
                        onToggle();
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
                        onToggle();
                    }}
                >
                    Hobbies
                </AccessButton>
            </AccessButtonWrap>
                <Box marginLeft={{ md: '0px', lg: '100px' }}>
                    {
                        sectionFlag === 'about' && 
                        <FadeWrap offsetY='30px' offsetX='30px' in={isOpen}>
                            <AboutMe />
                        </FadeWrap>
                    }
                    {
                        sectionFlag === 'experience' && 
                        <FadeWrap offsetY='30px' offsetX='30px' in={isOpen}>
                            <Experience />
                        </FadeWrap>
                    }
                    {
                        sectionFlag === 'education' && 
                        <FadeWrap offsetY='30px' offsetX='30px' in={isOpen}>
                            <Education />
                        </FadeWrap>
                    }
                    {
                        sectionFlag === 'projects' && 
                        <FadeWrap offsetY='30px' offsetX='30px' in={isOpen}>
                            <Projects />
                        </FadeWrap>
                    }
                    {
                        sectionFlag === 'skills' && 
                        <FadeWrap offsetY='30px' offsetX='30px' in={isOpen}>
                            <Skills />
                        </FadeWrap>
                    }
                    {
                        sectionFlag === 'hobbies' && 
                        <FadeWrap offsetY='30px' offsetX='30px' in={isOpen}>
                            <Hobbies />
                        </FadeWrap>
                    }
                </Box>
        </Box>
    );
};

const FadeWrap = styled(SlideFade)`
    transition-duration: 1s;
`;

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
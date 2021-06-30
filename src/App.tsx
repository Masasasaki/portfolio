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
    const [color, setColor] = useState('#2F5434');
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
                    bg='#2F5434'
                    variant='square' 
                    onClick={() => {
                        setSectionFlag('about');
                        setColor('#2F5434');
                        onToggle();
                    }}
                >
                    About
                </AccessButton>
                <AccessButton
                    bg='#437944'
                    variant='square'
                    onClick={() => {
                        setSectionFlag('experience');
                        setColor('#437944');
                        onToggle();
                    }}
                >
                    Experience
                </AccessButton>
                <AccessButton
                    bg='#528C5B'
                    variant='square'
                    onClick={() => {
                        setSectionFlag('education');
                        setColor('#528C5B');
                        onToggle();
                    }}
                >
                    Education
                </AccessButton>
                <AccessButton
                    bg='#8FBC90'
                    variant='square'
                    onClick={() => {
                        setSectionFlag('projects');
                        setColor('#8FBC90');
                        onToggle();
                    }}
                >
                    Projects
                </AccessButton>
                <AccessButton
                    bg='#005740'
                    variant='square'
                    onClick={() => {
                        setSectionFlag('skills');
                        setColor('#005740');
                        onToggle();
                    }}
                >
                    Skills
                </AccessButton>
                <AccessButton
                    bg='#003220'
                    variant='square'
                    onClick={() => {
                        setSectionFlag('hobbies');
                        setColor('#003220');
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
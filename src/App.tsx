import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
    Box,
    Button,
    SlideFade,
    useBreakpointValue,
    useDisclosure 
} from '@chakra-ui/react';

import { SideBar } from './components/SideBar';
import { AboutMe } from './components/sections/AboutMe';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Music } from './components/sections/Music.jsx';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';

interface sections {
    [key: string]: string,
}

// Main application component
const App = () => {
    // Green color scheme
    const accessButtonColors: sections = {
        about: '#0DAB76',
        experience: '#139A43',
        education: '#0B5D1E',
        projects: '#053B06',
        skills: '#000000',
        music: '#453643',
    };

    // Section flag & color state that changes on access button click
    const [sectionFlag, setSectionFlag] = useState('about');
    const [color, setColor] = useState(accessButtonColors.about);

    // State used to control fade transitions
    const { isOpen, onToggle } = useDisclosure();

    // Force toggle on section switch to allow open transition
    // eslint-disable-next-line
    useEffect(onToggle, [sectionFlag]);

    // Adjust default scroll point based on window size
    const scroll = useBreakpointValue({ base: 800, lg: 0});
    useEffect(() => {
        window.scrollTo(0, scroll!);
        // eslint-disable-next-line
    }, [sectionFlag]);

    // Handle access button click, change color & section flag
    const handleAccessClick = (section: string) => {
        setSectionFlag(section);
        setColor(accessButtonColors[section]);
        if (sectionFlag !== section) {
            onToggle();
        }
    }

    return (
        <Box display={{ lg: 'flex' }}>
            <Box minW='375px'>
                <SideBar backgroundColor={color} />
            </Box>
            <AccessButtonWrap
                position={{ md: 'sticky', lg: 'fixed' }}
                top={{ md: '0' }}
                zIndex={{ base: 3 }}
                left={{ md: '0px', lg: '365px' }}
                height={{ md: '100%', lg: '100vh' }}
                flexDirection={{ lg: 'column' }}
            >
                <AccessButton
                    bg={accessButtonColors.about}
                    variant='square' 
                    onClick={() => handleAccessClick('about')}
                >
                    About
                </AccessButton>
                <AccessButton
                    bg={accessButtonColors.experience}
                    variant='square'
                    onClick={() => handleAccessClick('experience')}
                >
                    Experience
                </AccessButton>
                <AccessButton
                    bg={accessButtonColors.education}
                    variant='square'
                    onClick={() => handleAccessClick('education')}
                >
                    Education
                </AccessButton>
                <AccessButton
                    bg={accessButtonColors.projects}
                    variant='square'
                    onClick={() => handleAccessClick('projects')}
                >
                    Projects
                </AccessButton>
                <AccessButton
                    bg={accessButtonColors.skills}
                    variant='square'
                    onClick={() => handleAccessClick('skills')}
                >
                    Skills
                </AccessButton>
                <AccessButton
                    bg={accessButtonColors.music}
                    variant='square'
                    onClick={() => handleAccessClick('music')}
                >
                    Music
                </AccessButton>
            </AccessButtonWrap>
                <Content marginLeft={{ md: '0px', lg: '100px' }}>
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
                        sectionFlag === 'music' && 
                        <FadeWrap offsetY='30px' offsetX='30px' in={isOpen}>
                            <Music />
                        </FadeWrap>
                    }
                </Content>
        </Box>
    );
};

const Content = styled(Box)`
    min-height: 100vh;
`;

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
import React from 'react';
import { Heading } from '@chakra-ui/react';
import styled from 'styled-components';
import { SideBar } from './components/SideBar';
import { AccessButtons } from './components/AccessButtons';
import { AboutMe } from './components/sections/AboutMe';
import { Experience } from './components/sections/Experience';

const App = () => {
    return (
        <Wrapper>
            <SideBar />
            <AccessButtons />
            <AboutMe />
        </Wrapper>
    );
};

const StyledHeading = styled(Heading)`
    color: white;
    background: black;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export default App;
import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
    return (
        <Wrap>
            <Heading size='3xl'>Welcome!</Heading>
            <AboutWrap fontSize='2xl' >
                <Content>
                    My name is Masaki Asanuma, I am a third-year Computer Science undergraduate student 
                    at Georgia Tech interested in exploring the different components that goes into designing, developing, and 
                    deploying a software application in various contexts. Outside of CS, I am a fingerstyle guitarist, 
                    a coffee enthusiast, and a lover of worldbuilding!
                </Content>
            </AboutWrap>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const AboutWrap = styled(Box)`
    margin: 30px 0px 10px 0px;
    border-radius: 10px;
    border-width: 1px;
    padding: 10px;
`;

const Content = styled(Text)`

`;

export { AboutMe };
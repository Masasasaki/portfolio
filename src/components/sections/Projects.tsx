import { Box, Heading, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import mts from '../../images/MTS.png';
import mangadex from '../../images/mangadexterity.png';
import portfolio from '../../images/portfolio.png';

const Projects = () => {
    return (
        <Wrap>
            <Heading size='3xl'>Projects</Heading>
            <ProjectsWrap>
                <ProjectEntry maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <ProjectPic src={portfolio} alt={'Portfolio'} />
                    <Content>
                        <Title fontSize='2xl'>
                            Portfolio
                        </Title>
                        <Description fontSize='lg'>
                            The website that you are on right now! After gaining React experience during my internship at KPMG, I decided to rebuild my portfolio site utilizing my frontend skills that I developed throughout the internship.
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton colorScheme='blue'>
                            Github Repo
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            React Hooks, styled-components, Chakra UI
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <ProjectPic src={mts} alt={'MTS'} />
                    <Content>
                        <Title fontSize='2xl'>
                            Mass Transit Simulation Application
                        </Title>
                        <Description fontSize='lg'>
                            A discrete-event simulation that allows buses to travel along different routes while transporting riders to travel along different routes while transporting riders to different stops. Download the project below and start the app by running the execute.bat file!
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton colorScheme='blue'>
                            Download
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            Java
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <ProjectPic src={mangadex} alt={'Mangadex'} />
                    <Content>
                        <Title fontSize='2xl'>
                            Mangadexterity
                        </Title>
                        <Description fontSize='lg'>
                            A web-app that allows the users to read any manga (Japanese comics) series from an online manga reader called Mangadex. All the information and the pages of the manga series are retrieved from the Mangadex API.
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton colorScheme='blue'>
                            Github Repo
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            React, Node, Express.js, Bootstrap
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <ProjectPic src={mangadex} alt={'Mangadex'} />
                    <Content>
                        <Title fontSize='2xl'>
                            Mangadexterity
                        </Title>
                        <Description fontSize='lg'>
                            A web-app that allows the users to read any manga (Japanese comics) series from an online manga reader called Mangadex. All the information and the pages of the manga series are retrieved from the Mangadex API.
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton colorScheme='blue'>
                            Github Repo
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            React, Node, Express.js, Bootstrap
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <ProjectPic src={mangadex} alt={'Mangadex'} />
                    <Content>
                        <Title fontSize='2xl'>
                            Mangadexterity
                        </Title>
                        <Description fontSize='lg'>
                            A web-app that allows the users to read any manga (Japanese comics) series from an online manga reader called Mangadex. All the information and the pages of the manga series are retrieved from the Mangadex API.
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton colorScheme='blue'>
                            Github Repo
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            React, Node, Express.js, Bootstrap
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
            </ProjectsWrap>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const ProjectPic = styled(Image)`
    min-width: 350px;
    minh-height: 250px;
    max-width: auto;
    max-height: auto;
`;

const ProjectsWrap = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 20px;
`;

const ProjectEntry = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const Content = styled(Box)`
    padding: 10px;
`;

const Title = styled(Text)`
    font-weight: bolder;
    padding: 5px;
`;

const Description = styled(Text)`
    padding: 5px;
`;

const TechUsed = styled(Text)`
    background: #F5F5F5;
    padding: 10px;
`;

const Footer = styled(Box)`
    margin-top: auto;
`;

const ActionButton = styled(Button)`
    margin: 10px;
`;

export { Projects };
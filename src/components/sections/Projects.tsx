import React from 'react';
import styled from 'styled-components';

import {
    Box,
    Heading,
    Image,
    Text,
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@chakra-ui/react';

import mts from '../../images/MTS.png';
import mangadex from '../../images/mangadexterity.png';
import portfolio from '../../images/portfolio.png';
import rgb from '../../images/rgb.png';
import zappay from '../../images/zappay.png';

import {
    FaReact,
    FaJava,
    FaBootstrap,
    FaSwift,
    FaPython,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaBus,
    FaCode,
} from 'react-icons/fa';

import {
    SiJavascript,
    SiStyledComponents,
} from 'react-icons/si';

// Component featuring projects I have worked on
const Projects = () => {
    const iconSize = 30;
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
                        <ActionButton
                            rightIcon={<FaGithub size={20} />}
                            colorScheme='blackAlpha'
                            onClick={() => {
                                const win = window.open('https://github.com/Masasasaki/portfolio/tree/dev', '_blank')!;
                                win.focus();
                            }}
                        >
                            Github Repo
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <FaReact size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <SiStyledComponents size={iconSize} />
                            </IconWrap>
                            <Text paddingLeft='5px'>Chakra UI</Text>
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
                            A discrete-event simulation that allows buses to travel along different routes while transporting riders to travel along different routes while transporting riders to different stops.
                        </Description>
                    </Content>
                    <Footer>
                        <Popover>
                            <PopoverTrigger>
                                <ActionButton
                                    rightIcon={<FaBus size={20} />}
                                    colorScheme='blackAlpha'
                                >
                                    Class Project
                                </ActionButton>
                            </PopoverTrigger>
                            <PopoverContent color="white" bg="black" borderColor="black">
                                <PopoverHeader fontWeight='bolder' fontSize='xl'>
                                    Unfotunately...
                                </PopoverHeader>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody fontSize='lg'>This was for a class project so the code & app is within Georgia Tech's private Github repository.</PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <FaJava size={iconSize} />
                            </IconWrap>
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
                        <ActionButton
                            rightIcon={<FaGithub size={20} />}
                            colorScheme='blackAlpha'
                            onClick={() => {
                                const win = window.open('https://github.com/Masasasaki/Mangadexterity', '_blank')!;
                                win.focus();
                            }}
                        >
                            Github Repo
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <FaReact size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <FaNodeJs size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <FaBootstrap size={iconSize} />
                            </IconWrap>
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <ProjectPic src={zappay} alt={'Zap Pay'} />
                    <Content>
                        <Title fontSize='2xl'>
                            Zap Pay
                        </Title>
                        <Description fontSize='lg'>
                        For HackGT 2019, my team created a mobile application and an iMessage extension that provides a secure peer-to-peer banking experience. Inspired from platforms like Venmo and Apple Pay, we explored new ways to make easy, quick, and secure transfers.
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton
                            rightIcon={<FaCode size={20} />}
                            colorScheme='blackAlpha'
                            onClick={() => {
                                const win = window.open('https://devpost.com/software/zap-pay', '_blank')!;
                                win.focus();
                            }}
                        >
                            Devpost
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <FaPython size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <FaSwift size={iconSize} />
                            </IconWrap>
                        </TechUsed>
                    </Footer>
                </ProjectEntry>
                <ProjectEntry maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <ProjectPic src={rgb} alt={'RGB Color Guess'} />
                    <Content>
                        <Title fontSize='2xl'>
                            RGB Color Guessing Game
                        </Title>
                        <Description fontSize='lg'>
                            A simple web-based game where the user guesses the color based on the given RGB. With two difficulties to play with, this game will test your perception of color through the RGB system!
                        </Description>
                    </Content>
                    <Footer>
                        <ActionButton
                            rightIcon={<FaGithub size={20} />}
                            colorScheme='blackAlpha'
                            onClick={() => {
                                const win = window.open('https://github.com/Masasasaki/RGB-Game', '_blank')!;
                                win.focus();
                            }}
                        >
                            Github Repo
                        </ActionButton>
                        <TechUsed fontSize='lg'>
                            <IconWrap>
                                <SiJavascript size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <FaHtml5 size={iconSize} />
                            </IconWrap>
                            <IconWrap>
                                <FaCss3Alt size={iconSize} />
                            </IconWrap>
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
    display: flex;
    flex-direction: row;
    background: #F5F5F5;
    padding: 10px;
`;

const IconWrap = styled.span`
    padding: 0px 5px 0px 5px;
`;

const Footer = styled(Box)`
    margin-top: auto;
`;

const ActionButton = styled(Button)`
    margin: 10px 10px 20px 10px;
    background: black;
    color: white;
`;

export { Projects };
import React from 'react';
import styled from 'styled-components';

import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Heading,
    Image,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react';

import georgiatech from '../../images/gtlogo.png';
import spartans from '../../images/spartans.jpg';

// Education section featuring the schools I went to
const Education = () => {
    return (
        <Wrap>
            <Heading size='3xl'>Education</Heading>
            <EducationEntry boxShadow='base'>
                <EntryHeader>
                    <Image src={georgiatech} alt='GT' boxSize='100px' borderRadius='md' />
                    <HeaderInfo>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <Bold><InfoText fontSize={{ base: '3xl' }}>Georgia Institute of Technology</InfoText></Bold>
                            <DateBadge>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    Aug 2018 - Dec 2022 (Expected)
                                </Badge>
                            </DateBadge>
                        </HeaderWrap>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <InfoText fontSize={{ base: '2xl' }}>Bachelors of Science in Computer Science</InfoText>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                Atlanta, Georgia
                            </Box>
                        </HeaderWrap>
                    </HeaderInfo>
                </EntryHeader>
                <EntryBody>
                    <InfoText fontSize={{ base: 'xl' }}>Specializing in Information Internetworks & Media, focusing on studying networks and computer graphics.</InfoText>
                    <AccordionWrap allowMultiple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#A28D5B', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    Relevant Coursework
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItemPoint fontSize='lg'>Data Structures & Algorithms (Fundamental data structures & algorithms)</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Design & Analysis of Algorithms (Dynamic programming, divide & conquer, graph algorithms, NP-complete, RSA encryption)  </ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Introduction to Software Engineering (SDLC concepts including requirements gathering, project planning, architecture diagrams)</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Objects & Design (Software design principles such as SOLID & GRASP)</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Introduction to Databases (Querying using SQL, designing & creating databases)</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Computer Networking (Fundamental network concepts & protocols)</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Object-Oriented Programming (Intro java course)</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Computer Organization & Programming (Intro comptuer architecture with Assembly & C)</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Systems & Networks (OS concepts including processor design, pipelines, memory, scheduling, and networking)</ListItemPoint>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#A28D5B', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    Activities
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            <InfoText fontSize={{ base: 'lg' }}>Snare Drummer at Yellow Jackets Marching Band, IT Support Assistant within College of Computing</InfoText>
                            </AccordionPanel>
                        </AccordionItem>
                    </AccordionWrap>
                </EntryBody>
            </EducationEntry>
            <EducationEntry boxShadow='base'>
                <EntryHeader>
                    <Image src={spartans} alt='Spartans' boxSize='100px' borderRadius='md' />
                    <HeaderInfo>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <Bold><InfoText fontSize={{ base: '3xl' }}>South High School</InfoText></Bold>
                            <DateBadge>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    Sep 2014 - Jun 2018
                                </Badge>
                            </DateBadge>
                        </HeaderWrap>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <InfoText fontSize={{ base: '2xl' }}>High School Diploma</InfoText>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                Torrance, California
                            </Box>
                        </HeaderWrap>
                    </HeaderInfo>
                </EntryHeader>
                <EntryBody>
                    <InfoText fontSize={{ base: 'xl' }}>Developed my interest for software development & engineering primarily through AP Computer Science, Robotics, and working as a CS tutor/teacher.</InfoText>
                    <AccordionWrap allowMultiple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#18453B', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    Activities
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItemPoint fontSize='lg'>President at FRC Team 1197, primarily focused on robot software.</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Drum Captain at Spartans Marching Band, performed as a snare drummer.</ListItemPoint>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </AccordionWrap>
                </EntryBody>
            </EducationEntry>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const EducationEntry = styled(Box)`
    margin: 30px 0px 10px 0px;
    border-radius: 10px;
    border-width: 1px;
    padding: 20px;
`;

const EntryHeader = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const EntryBody = styled(Box)`
    display flex;
    flex-direction: column;
    padding-top: 10px;
`;

const ListItemPoint = styled(ListItem)`
    margin-left: 10px;
`;

const HeaderInfo = styled(Box)`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`;

const HeaderWrap = styled(Box)`
    display: flex;
`;

const InfoText = styled(Text)`
    padding: 5px;
`;

const DateBadge = styled.div`
    padding-top: 5px;
    padding-left: 5px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const AccordionWrap = styled(Accordion)`
    padding-top: 10px;
    padding-bottom: 10px;
`;

export { Education };
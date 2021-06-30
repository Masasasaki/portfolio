import React from 'react';

import {
    Heading,
    Image,
    Box,
    Text,
    ListItem,
    UnorderedList,
    Badge,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from '@chakra-ui/react';

import styled from 'styled-components';
import kpmg from '../../images/KPMG.jpg';
import ukg from '../../images/ukg.jpg';

const Experience = () => {
    return (
        <Wrap>
            <Heading size='3xl'>Experience</Heading>
            <ExperienceEntry boxShadow='base'>
                <EntryHeader>
                    <Image src={kpmg} alt='kpmg' boxSize='100px' borderRadius='md' />
                    <HeaderInfo>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <Bold><InfoText fontSize={{ base: '3xl' }}>Software Engineer Intern</InfoText></Bold>
                            <DateBadge>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    Jan 2021 - Jul 2021
                                </Badge>
                            </DateBadge>
                        </HeaderWrap>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <InfoText fontSize={{ base: '2xl' }}>KPMG Ignition Tokyo</InfoText>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                Tokyo, Japan
                            </Box>
                        </HeaderWrap>
                    </HeaderInfo>
                </EntryHeader>
                <EntryBody>
                    <InfoText fontSize={{ base: 'xl' }}>Frontend, Backend, & Core logic dev for 2 applications/projects aimed to be utilized by KPMG Japan employees for automating/supporting their auditing, accounting, and risk management tasks.</InfoText>
                    <AccordionWrap allowMultiple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#1245a8', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    Document Search Service (Mar - Jul)
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItemPoint fontSize='lg'>Developed both the frontend (React Hooks, TypeScript) and backend (Python Django, PostgresSQL) of the first phase of a document search service web application utilized by KPMG Japan auditors.</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Implemented a content management portal where content managers can add, edit, delete, and track the visibility of audit documents that the end-users can search through the engine.</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Designed PostgresSQL tables for the different types of audit documents available within the engine.</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Utilized MobX 6 for global state management and styled-components for adding CSS styling.</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Participated in agile workflow meetings including sprint planning, retrospective, and estimation planning.</ListItemPoint>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#1245a8', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    Audit Vouching Automation (Jan - Mar)
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItemPoint fontSize='lg'>Developed the core logic & backend of a python package that automates vouching tasks performed by auditors of KPMG Japan.</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Implemented validation, prediction, and mapping functionality for excel inputs.</ListItemPoint>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </AccordionWrap>
                    <InfoText fontSize= {{ base: 'lg' }}>Tech used: React (Hooks, Router), MobX, styled-components, TypeScript, Python Django, PostgresSQL, Docker, Azure DevOps</InfoText>
                </EntryBody>
            </ExperienceEntry>
            <ExperienceEntry boxShadow='base'>
                <EntryHeader>
                    <Image src={ukg} alt='UKG' boxSize='100px' borderRadius='md' />
                    <HeaderInfo>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <Bold><InfoText fontSize={{ base: '3xl' }}>Software Engineer Intern</InfoText></Bold>
                            <DateBadge>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    Sep 2020 - Dec 2020
                                </Badge>
                            </DateBadge>
                        </HeaderWrap>
                        <HeaderWrap
                            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                            alignItems={{ base: 'flex-start', md: 'center', lg: 'flex-start', xl: 'center' }}
                        >
                            <InfoText fontSize={{ base: '2xl' }}>UKG (Ultimate Kronos Group)</InfoText>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                Remote, Virtual
                            </Box>
                        </HeaderWrap>
                    </HeaderInfo>
                </EntryHeader>
                <EntryBody>
                    <InfoText fontSize={{ base: 'xl' }}>DevOps/SRE role within the Date Warehousing team, automating build & deployment of various applications/services using TeamCity pipelines and Bash & PowerShell scripts.</InfoText>
                    <AccordionWrap allowMultiple>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#045c5c', color: 'white', fontWeight: 'bolder' }}>
                                <Box flex='1' textAlign='left'>
                                    More details
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItemPoint fontSize='lg'>Developed and maintained CI/CD pipelines on TeamCity, reducing the deployment time of Data Warehousing services from +5 hours to ~1 hour and increasing the pipeline success rate by 30-40%.</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Boosted the efficiency of acceptance testing & analysis by implementing an automated weekly creation of a fully configured sandbox environment containing Microsoft SQL databases, MongoDB, RabbitMQ, .NET applications on Kubernetes, and virtual machines.</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Improved the portability & accessibility of company databases by creating an automated dockerization process for Microsoft SQL databases.</ListItemPoint>
                                    <ListItemPoint fontSize='lg'>Enhanced the code quality of company databases by generating static analysis reports and developing re-runnable automated build, promote, and deploy pipelines using Redgate Deploy.</ListItemPoint>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </AccordionWrap>
                    <InfoText fontSize= {{ base: 'lg' }}>Tech used: Docker, TeamCity, PowerShell, Bash, Redgate Deploy, RabbitMQ, MongoDB, Microsoft SQL, Kubernetes, Vault (Hashicorp), Artifactory (JFrog), JIRA</InfoText>
                </EntryBody>
            </ExperienceEntry>
        </Wrap>
    );
};

const ExperienceEntry = styled(Box)`
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

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 90%;
`;

export { Experience };
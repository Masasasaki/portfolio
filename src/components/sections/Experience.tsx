import { Heading, Image, Box, Text, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import kpmg from '../../images/KPMG.jpg';

const Experience = () => {
    return (
        <Wrap>
            <Heading size='3xl'>Experience</Heading>
            <ExperienceEntry boxShadow='inner'>
                <EntryHeader>
                    <Image src={kpmg} alt='kpmg' boxSize='100px' borderTopLeftRadius='md' borderBottomRightRadius='md' />
                    <HeaderInfo>
                        <HeaderWrap>
                            <Bold><InfoText fontSize={{ base: '3xl' }}>Software Engineer Intern</InfoText></Bold>
                            <InfoText fontSize={{ base: 'md' }}>Jan 2021 - Jul 2021</InfoText>
                        </HeaderWrap>
                        <HeaderWrap>
                            <InfoText fontSize={{ base: '2xl' }}>KPMG Ignition Tokyo</InfoText>
                            <InfoText fontSize={{ base: 'md' }}>Tokyo, Japan</InfoText>
                        </HeaderWrap>
                    </HeaderInfo>
                </EntryHeader>
                <EntryBody>
                    <InfoText fontSize={{ base: 'xl' }}>Document Search Service (Mar - Jul)</InfoText>
                    <UnorderedList>
                        <ListItemPoint fontSize='lg'>Developing both the frontend (React Hooks, TypeScript) and backend (Python Django, PostgresSQL) of the first phase of a document search service web application utilized by KPMG Japan auditors.</ListItemPoint>
                        <ListItemPoint fontSize='lg'>Implementing a content management portal where content managers can add, edit, delete, and track the visibility of audit documents that the end-users can search through the engine.</ListItemPoint>
                        <ListItemPoint fontSize='lg'>Designing PostgresSQL tables for the different types of audit documents available within the engine.</ListItemPoint>
                        <ListItemPoint fontSize='lg'>Utilized MobX 6 for global state management and styled-components for adding CSS styling.</ListItemPoint>
                    </UnorderedList>
                </EntryBody>
            </ExperienceEntry>
        </Wrap>
    );
};

const ExperienceEntry = styled(Box)`
    margin: 30px 0px 10px 0px;
    border-radius: 10px;
    border-width: 1px;
`;

const EntryHeader = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const EntryBody = styled(Box)`
    display flex;
    flex-direction: column;
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
    flex-direction: row;
    align-items: center;
`;

const InfoText = styled(Text)`
    padding: 5px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 90%;
`;

export { Experience };
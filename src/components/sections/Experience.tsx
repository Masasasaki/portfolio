import { Heading, Image, Box, Text } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import kpmg from '../../images/KPMG.jpg';

const Experience = () => {
    return (
        <Wrap>
            <Heading size='3xl'>Experience</Heading>
            <ExperienceEntry>
                <EntryHeader>
                    <Image src={kpmg} alt='kpmg' boxSize='100px' />
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
            </ExperienceEntry>
        </Wrap>
    );
};

const ExperienceEntry = styled(Box)`
    border-radius: 10px;
    border-width: 1px;
    margin: 10px 0px 10px 0px;
`;

const EntryHeader = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const HeaderInfo = styled(Box)`
    display: flex;
    flex-direction: column;
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
`;

export { Experience };
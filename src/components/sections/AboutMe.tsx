import React from 'react';
import styled from 'styled-components';

import { 
    Box,
    Heading,
    Text,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react';

import aboutme1 from '../../images/aboutme1.jpeg';
import aboutme2 from '../../images/aboutme2.jpg';
import aboutme3 from '../../images/aboutme3.jpeg';
import aboutme4 from '../../images/aboutme4.jpeg';

const AboutMe = () => {
    return (
        <Wrap>
            <Heading size='3xl'>Welcome!</Heading>
            <AboutWrap flexDirection={{ base: 'column' }}>
                <Content fontSize='2xl'>
                    My name is Masaki Asanuma, I am a third-year Computer Science undergraduate student 
                    at Georgia Tech interested in exploring the different components that goes into designing, developing, and 
                    deploying a software application in various contexts. Outside of CS, I love to play guitar/drums and drink 
                    a delicious cup of Ethiopian coffee brewed using my Aeropress ☕
                    <br />
                    I am currently seeking a software development/engineering internship for summer 2022! Please contact me 
                    through email or LinkedIn if you have an opportunity for me!
                </Content>
                <Pictures>
                    <Tabs
                        align='center'
                        colorScheme='blackAlpha'
                        variant='enclosed'
                    >
                        <TabList>
                            <Tab>Ito, Shizuoka</Tab>
                            <Tab>Harvesting Takenoko</Tab>
                            <Tab>Snowing</Tab>
                            <Tab>GT Drumline</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <AboutPic src={aboutme1} alt='About me picture' />
                            </TabPanel>
                            <TabPanel>
                                <AboutPic src={aboutme2} alt='About me picture' />
                            </TabPanel>
                            <TabPanel>
                                <AboutPic src={aboutme3} alt='About me picture' />
                            </TabPanel>
                            <TabPanel>
                                <AboutPic src={aboutme4} alt='About me picture' />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Pictures>
            </AboutWrap>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Pictures = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const AboutWrap = styled(Box)`
    display: flex;
    margin: 30px 0px 10px 0px;
    border-radius: 10px;
    border-width: 1px;
    padding: 10px;
    align-items: center;
`;

const Content = styled(Text)`
    display: flex;
    flex-direction: row;
    text-align: center;
    font-weight: bolder;
    padding: 30px;
`;

const AboutPic = styled(Image)`
    max-height: 500px;
    border-radius: 15px;
`;

export { AboutMe };
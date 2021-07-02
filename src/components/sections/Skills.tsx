import React from 'react';
import styled from 'styled-components';

import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react';

import {
    FaReact,
    FaJava,
    FaPython,
    FaGitAlt,
    FaDocker,
    FaDatabase,
    FaNodeJs,
    FaWindows,
    FaApple,
    FaUbuntu,
} from 'react-icons/fa';

import {
    SiJavascript,
    SiGnubash,
    SiPowershell,
    SiC,
    SiStyledComponents,
    SiDjango,
    SiJetbrains,
    SiMongodb,
    SiRabbitmq,
    SiKubernetes,
    SiPostgresql,
    SiPostman,
    SiAzuredevops,
    SiVisualstudio,
    SiAzureartifacts,
    SiMicrosoftsqlserver,
    SiTypescript,
} from 'react-icons/si';

import {
    AiOutlineConsoleSql,
} from 'react-icons/ai';

import {
    DiJira,
} from 'react-icons/di';

import {
    GrMysql,
} from 'react-icons/gr';

import {
    RiSafe2Fill,
} from 'react-icons/ri';

// Component featuring all the tech I used throughout my career
const Skills = () => {
    const iconSize = 50;
    return (
        <Wrap>
            <Heading size='3xl'>Skills</Heading>
            <Text fontSize={{ base: '2xl' }} paddingTop={{ base: '20px' }}>Here are the programming languages, technologies, tools, & operating systems that I have used throughout my career. Some skills I am more comfortable/proficient than others, but I have been exposed to all the listed tech and I am confident that I can quickly refresh my knowledge about it. Always expanding & willing to learn new cool stuff to use in projects!</Text>
            <SkillEntry boxShadow='base'>
                <EntryHeader>
                    <Text fontSize={{ base: '3xl' }} padding={{ base: '5px' }}>Languages</Text>
                </EntryHeader>
                <EntryBody>
                    <IconWrap>
                        <FaJava size={iconSize} />
                        <Text>Java</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiJavascript size={iconSize} />
                        <Text>JavaScript (ES6)</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiTypescript size={iconSize} />
                        <Text>TypeScript</Text>
                    </IconWrap>
                    <IconWrap>
                        <FaPython size={iconSize} />
                        <Text>Python</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiGnubash size={iconSize} />
                        <Text>Bash</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiPowershell size={iconSize} />
                        <Text>PowerShell</Text>
                    </IconWrap>
                    <IconWrap>
                        <AiOutlineConsoleSql size={iconSize} />
                        <Text>SQL</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiC size={iconSize} />
                        <Text>C</Text>
                    </IconWrap>
                </EntryBody>
            </SkillEntry>
            <SkillEntry boxShadow='base'>
                <EntryHeader>
                    <Text fontSize={{ base: '3xl' }} padding={{ base: '5px' }}>Technologies</Text>
                </EntryHeader>
                <EntryBody>
                    <IconWrap>
                        <FaReact size={iconSize} />
                        <Text>React (Hooks, Router, MobX)</Text>
                    </IconWrap>
                    <IconWrap>
                        <FaDocker size={iconSize} />
                        <Text>Docker</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiStyledComponents size={iconSize} />
                        <Text>styled-components</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiDjango size={iconSize} />
                        <Text>Django</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiJetbrains size={iconSize} />
                        <Text>TeamCity</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiMicrosoftsqlserver size={iconSize} />
                        <Text>Microsoft SQL</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiRabbitmq size={iconSize} />
                        <Text>RabbitMQ</Text>
                    </IconWrap>
                    <IconWrap>
                        <FaNodeJs size={iconSize} />
                        <Text>Node.js</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiPostgresql size={iconSize} />
                        <Text>PostgresSQL</Text>
                    </IconWrap>
                    <IconWrap>
                        <GrMysql size={iconSize} />
                        <Text>MySQL</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiMongodb size={iconSize} />
                        <Text>MongoDB</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiKubernetes size={iconSize} />
                        <Text>Kubernetes</Text>
                    </IconWrap>
                </EntryBody>
            </SkillEntry>
            <SkillEntry boxShadow='base'>
                <EntryHeader>
                    <Text fontSize={{ base: '3xl' }} padding={{ base: '5px' }}>Tools</Text>
                </EntryHeader>
                <EntryBody>
                    <IconWrap>
                        <FaGitAlt size={iconSize} />
                        <Text>Git</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiAzuredevops size={iconSize} />
                        <Text>Azure DevOps</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiPostman size={iconSize} />
                        <Text>Postman</Text>
                    </IconWrap>
                    <IconWrap>
                        <DiJira size={iconSize} />
                        <Text>JIRA</Text>
                    </IconWrap>
                    <IconWrap>
                        <FaDatabase size={iconSize} />
                        <Text>Redgate Deploy</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiVisualstudio size={iconSize} />
                        <Text>Visual Studio</Text>
                    </IconWrap>
                    <IconWrap>
                        <SiAzureartifacts size={iconSize} />
                        <Text>Artifactory (JFrog)</Text>
                    </IconWrap>
                    <IconWrap>
                        <RiSafe2Fill size={iconSize} />
                        <Text>Vault (Hashicorp)</Text>
                    </IconWrap>
                </EntryBody>
            </SkillEntry>
            <SkillEntry boxShadow='base'>
                <EntryHeader>
                    <Text fontSize={{ base: '3xl' }} padding={{ base: '5px' }}>Operating Systems</Text>
                </EntryHeader>
                <EntryBody>
                    <IconWrap>
                        <FaUbuntu size={iconSize} />
                        <Text>Linux (Ubuntu)</Text>
                    </IconWrap>
                    <IconWrap>
                        <FaApple size={iconSize} />
                        <Text>MacOS</Text>
                    </IconWrap>
                    <IconWrap>
                        <FaWindows size={iconSize} />
                        <Text>Windows</Text>
                    </IconWrap>
                </EntryBody>
            </SkillEntry>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const IconWrap = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
`;

const SkillEntry = styled(Box)`
    margin: 30px 0px 10px 0px;
    border-radius: 10px;
    border-width: 1px;
    padding: 20px
`;

const EntryHeader = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const EntryBody = styled(Box)`
    display flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 10px;
`;

export { Skills };
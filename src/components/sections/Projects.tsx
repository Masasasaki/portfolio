import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const Projects = () => {
    return (
        <Wrap>
            <Heading size='3xl'>Projects</Heading>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export { Projects };
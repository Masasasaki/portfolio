import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const Hobbies = () => {
    return (
        <Wrap>
            <Heading size='3xl'>Hobbies</Heading>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export { Hobbies };
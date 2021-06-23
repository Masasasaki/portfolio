import React from 'react';
import { Heading } from '@chakra-ui/react';
import styled from 'styled-components';

const App = () => {
    return (
        <div>
            <StyledHeading>Chakra UI & styled-components work</StyledHeading>
        </div>
    );
};

const StyledHeading = styled(Heading)`
    color: white;
    background: black;
`

export default App;
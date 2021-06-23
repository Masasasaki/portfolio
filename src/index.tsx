import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fontsource/jost/300.css';
import '@fontsource/source-sans-pro/300.css'
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme'

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>, 
    document.getElementById('root'),
);
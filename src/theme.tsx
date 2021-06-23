import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: 'Jost',
        body: 'Jost',
    },
    components: {
        Button: {
            variants: {
                'square': {
                    borderRadius: '0px',
                    _focus: {
                        boxShadow: '0px 0px 5px rgba(0, 0, 0)',
                    },
                },
            },
        },
    },
});

export default theme;
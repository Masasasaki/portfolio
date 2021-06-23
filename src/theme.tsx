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
                },
            },
        },
    },
})

export default theme
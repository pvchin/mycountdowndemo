import {
  extendTheme,
  withDefaultColorScheme,
  theme as ChakraTheme,
} from '@chakra-ui/react';

import '@fontsource/dancing-script';
import '@fontsource/old-standard-tt';
import '@fontsource/orbitron';
import '@fontsource/open-sans';
import '@fontsource/raleway';

export const theme = extendTheme({
  ...ChakraTheme,
  styles: {
    global: {
      body: {
        color: 'olive.800',
        backgroundColor: 'olive.100',
      },
    },
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Forum, sans-serif',
    // mono: 'Menlo, monospace',
    mono: 'old-standard-tt',
    myFont: 'dancing-script',
  },

  colors: {
    olive: {
      50: '#eff5e9',
      100: '#d5ddd3',
      200: '#bbc5b9',
      300: '#a1ad9e',
      400: '#879684',
      500: '#6e7c6a',
      600: '#556152',
      700: '#3c4539',
      800: '#222a21',
      900: '#051005',
    },
  },
  // withDefaultColorScheme({ colorScheme: "brand" }),
});

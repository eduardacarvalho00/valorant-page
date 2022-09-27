import { extendTheme } from '@chakra-ui/react';
// import bg from '../assets/background.png';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#000000',
      800: '#111111',
      700: '#212121',
      300: '#BBBBBB',
      200: '#D9D9D9', 
      100: '#ECE8E1',
      50: '#FFFFFF', 
    },
    blue: {
      800: '#0F1923',
    },
    red: {
      700: '#FF4655',
    },
  },
  fonts: {
    heading: 'Noto Sans',
    body: 'Noto Sans',

  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.900',
      },
    },
  },
});

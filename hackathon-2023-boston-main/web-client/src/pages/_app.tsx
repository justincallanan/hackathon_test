import type { AppProps } from 'next/app';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import NavBar from './_nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

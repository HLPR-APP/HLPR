import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

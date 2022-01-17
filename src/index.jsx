import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

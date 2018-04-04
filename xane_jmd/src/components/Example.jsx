import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from './lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '0',
    message: 'Hello Ayush!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    trigger: '2'
  },
  {
    id: '2',
    message: 'Jai Mata Di!',
    end: true,
  }
];


const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default ThemedExample;

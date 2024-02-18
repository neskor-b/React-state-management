import React from 'react';
import ReactDOM from 'react-dom/client';
import RootApp from './rootApp';
import {  ColorModeScript } from '@chakra-ui/react'
import theme from './theme';
import './style.css';

import './i18n'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RootApp />
    </React.StrictMode>
);

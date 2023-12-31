/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navigator from './src/Navigator';

const ProvidedNavigator = () => {
    return (
        <ThemeProvider >
            <Navigator />
        </ThemeProvider>
    );
};

AppRegistry.registerComponent(appName, () => ProvidedNavigator);

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';
import {Main as Root} from './src/app/Main';

const Main = () => (
    <Root />
);

AppRegistry.registerComponent('Baraka', () => Main);
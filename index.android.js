import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import {Main as Root} from './src/app/MainA';

const Main = () => (
    <Root />
);

AppRegistry.registerComponent('Baraka', () => Main);
/**
 * Created by Amir on 21/11/16.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Intro = () => (
    <View style={styles.container}>
        <Text style={styles.logo}>
            Baraka
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#032c64',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        zIndex: 100
    },
    logo: {
        color: '#4190f5',
        fontSize: 35
    }
});
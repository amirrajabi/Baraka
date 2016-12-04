/**
 * Created by Amir on 27/11/16.
 */

import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

export class Quotes extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        let quotes = this.props.quotes,
            list = quotes.map((item, index) => {
                if (quotes[index].category.toLowerCase() === this.props.cat.toLowerCase()) {
                    let quote = <Text style={styles.quote}
                                      underlayColor="transparent">
                        " {quotes[index].quote} "
                    </Text>;
                    return (
                        <View key={index}>
                            <View style={styles.rowContainer}>
                                {quote}
                                <Text style={styles.from}
                                      underlayColor="transparent">{quotes[index].from}</Text>
                                <Text style={styles.source}
                                      underlayColor="transparent"> __ {quotes[index].source} </Text>
                            </View>
                        </View>
                    )
                }
            });
        return (
            <LinearGradient colors={['#1AD6FD', '#1D62F0']} style={styles.container}>
                <ScrollView style={styles.container}>
                    {list}
                </ScrollView>
            </LinearGradient>
        )
    }

};

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(256, 256, 256, 0.1)'
    },
    quote: {
        fontSize: 26,
        fontWeight: '100',
        paddingBottom: 20,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: 'rgba(0,51,95,0)'
    },
    from: {
        fontSize: 11,
        fontWeight: '100',
        textAlign: 'right',
        color: 'rgba(256,256,256,0.8)',
        backgroundColor: 'rgba(0,51,95,0)'
    },
    source: {
        color: 'rgba(256,256,256,0.8)',
        fontSize: 11,
        fontWeight: '100',
        textAlign: 'right',
        backgroundColor: 'rgba(0,51,95,0)'
    }
});

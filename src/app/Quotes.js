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
import {BlurView} from 'react-native-blur';

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
                        "{quotes[index].quote}"
                    </Text>;
                    return (
                        <View key={index}>
                            <View style={styles.rowContainer}>
                                {quote}
                                <Text style={styles.author}
                                      underlayColor="transparent">{quotes[index].author}</Text>
                                <Text style={styles.source}
                                      underlayColor="transparent"> __ {quotes[index].source} </Text>
                            </View>
                        </View>
                    )
                }
            });
        return (

            <View style={styles.container}>
                <Image style={styles.catBg}
                       source={{uri: this.props.bg}}>
                    <BlurView blurType="light" blurAmount={50} style={styles.blur}>
                    </BlurView>
                </Image>

                <ScrollView style={styles.catList}>
                    {list}
                </ScrollView>
            </View>

        )
    }

}
;

var styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        padding: 20,
        borderBottomWidth: 1,
        backgroundColor: 'rgba(0,51,95,0.3)',
        borderBottomColor: 'rgba(256, 256, 256, 0.1)'
    },
    quote: {
        fontSize: 22,
        fontWeight: '300',
        paddingBottom: 20,
        color: '#fff'
    },
    author: {
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
    },
    catList: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height
    },
    catTitle: {
        fontSize: 40,
        fontWeight: '100',
        color: '#fff'
    },
    catBg: {
        width: width,
        height: height
    },
    blur: {
        width: width,
        height: height
    }
});

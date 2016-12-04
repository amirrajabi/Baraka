/**
 * Created by Amir on 20/11/16.
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
import {Quotes} from './Quotes';

const {width, height} = Dimensions.get('window');

export class Categories extends Component {

    constructor() {
        super();
        this.state = {};
    }

    callQuotes(cat) {
        this.props.navigator.push({
            title: cat.toUpperCase(),
            component: Quotes,
            passProps: {
                cat: cat,
                quotes: this.props.quotes
            },
            navigationBarHidden: false,
            shadowHidden: true
        });
    }

    render() {

        let categories = this.props.categoriesList;
        let list = categories.map((item, index) => {
            return (
                <TouchableOpacity underlayColor="transparent"
                                  onPress={this.callQuotes.bind(this, item.category)}
                                  key={index}
                                  style={styles.rowContainer}>
                    <Text style={styles.catTitle}>
                        {item.category.toUpperCase()}
                    </Text>
                </TouchableOpacity>
            )
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

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1
    },
    rowContainer: {
        flex: 1,
        height: 84,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,51,95,0.25)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(256, 256, 256, 0.1)'
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
/**
 * Created by Amir on 20/11/16.
 */
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Categories} from './Categories';
import {
    View,
    Text,
    Image,
    Dimensions,
    NavigatorIOS,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import {BlurView} from 'react-native-blur';
import api from '../utils/api';

const {width, height} = Dimensions.get('window');

export class Home extends Component {

    constructor() {
        super();
        this.state = {
            allQuote: [],
            categoriesList: [],
            headerUrl: '',
            dayQuote: '',
            author: '',
            source: '',
            error: ''
        }
    }

    componentWillMount() {
        this.getHomeData();
        this.getQuotsData();
        this.getCategoriesData();
    }

    getHomeData() {
        api.getHome()
            .then((res) => {
                if (res.message === 'Not Found') {
                    this.setState({
                        error: 'User not found'
                    })
                } else {
                    this.setState({
                        headerUrl: res.image_header
                    })
                }
            });
    }

    getQuotsData() {
        api.getQuotes()
            .then((res) => {
                if (res.message === 'Not Found') {
                    this.setState({
                        error: 'User not found'
                    })
                } else {
                    let qoutesLength = res.length - 1,
                        randomNum = Math.round(Math.random() * qoutesLength);
                    this.setState({
                        allQuote: res,
                        dayQuote: res[randomNum].quote,
                        author: res[randomNum].from,
                        source: res[randomNum].source
                    })
                }
            });
    }

    getCategoriesData() {
        api.getCategories()
            .then((res) => {
                if (res.message === 'Not Found') {
                    this.setState({
                        error: 'User not found'
                    })
                } else {
                    this.setState({
                        categoriesList: res.categories
                    })
                }
            });
    }

    anotherQuote() {
        let qoutesLength = this.state.allQuote.length - 1,
            randomNum = Math.round(Math.random() * qoutesLength),
            res = this.state.allQuote;
        this.setState({
            dayQuote: res[randomNum].quote,
            author: res[randomNum].from,
            source: res[randomNum].source
        })
    }

    goCategorise() {
        this.props.navigator.push({
            title: 'Categories',
            component: Categories,
            passProps: {
                categoriesList: this.state.categoriesList,
                quotes: this.state.allQuote,
                bg: this.state.headerUrl
            },
            navigationBarHidden: false,
            shadowHidden: true
        });
    }

    render() {

        let Header = this.state.headerUrl ?
            <Image
                style={styles.header}
                source={{uri: this.state.headerUrl}}>
                <BlurView blurType="light" blurAmount={50} style={styles.blur}>
                </BlurView>
            </Image> :
            <Text/>;

        return (
            <LinearGradient colors={['#1AD6FD', '#1D62F0']} style={styles.container}>

                {Header}

                <View style={styles.content}>

                    <Text style={styles.titleText}>
                        Quote Of The Day
                    </Text>

                    <Text style={styles.quoteText}>
                        " {this.state.dayQuote} "
                    </Text>

                    <Text style={styles.footer}>
                        {this.state.author}
                    </Text>

                    <Text style={styles.footer}>
                        __ {this.state.source}
                    </Text>

                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.buttons, styles.buttonOne]}
                                      onPress={this.anotherQuote.bind(this)}>
                        <Text style={styles.buttonText}>
                            Another Quote
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttons, styles.buttonTwo]}
                                      onPress={this.goCategorise.bind(this)}>
                        <Text style={styles.buttonText}>
                            Categorise
                        </Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative'
    },
    header: {
        width: width,
        height: height
    },
    blur: {
        width: width,
        height: height
    },
    content: {
        position: 'absolute',
        top: width / 4,
        padding: 20,
        width: width
    },
    titleText: {
        fontSize: 40,
        color: '#032c64',
        backgroundColor: 'rgba(0,0,0,0)',
        textAlign: 'center',
        marginBottom: 50,
        fontWeight: '100'
    },
    quoteText: {
        backgroundColor: 'rgba(0,0,0,0)',
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: '300',
        color: '#032c64',
        height: 100
    },
    footer: {
        backgroundColor: 'rgba(0,0,0,0)',
        textAlign: 'right',
        fontSize: 11,
        color: 'rgba(256,256,256,0.8)'
    },
    buttonContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0
    },
    buttons: {
        backgroundColor: 'rgba(256,256,256,0)',
        width: width,
        height: 84,
        borderRadius: 0,
        marginBottom: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOne: {
        backgroundColor: 'rgba(0,51,95,0.25)',
    },
    buttonTwo: {
        backgroundColor: 'rgba(0,51,95,0.5)',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '300'
    }
});
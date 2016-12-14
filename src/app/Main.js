/**
 * Created by Amir on 20/11/16.
 */
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    View,
    Text,
    NavigatorIOS,
    StyleSheet,
    Dimensions
} from 'react-native';
import {Home} from './Home';

const {width, height} = Dimensions.get('window');

export class Main extends Component {

    constructor() {
        super();
        this.state = {
            intro: true
        };
        setTimeout(() => {
            this.setState({intro: false});
        }, 2000);
    }

    render() {

        let Intro = this.state.intro ?
            <LinearGradient colors={['#1AD6FD', '#1D62F0']} style={styles.intro}>
                <Text style={styles.logo}>
                    Baraka
                </Text>
                <Text style={styles.logoFooter}>
                    HOOR STUDIO
                </Text>
            </LinearGradient> :
            <View style={styles.introHide}></View>;

        return (
            <View style={styles.container}>

                {Intro}

                <NavigatorIOS
                    style={styles.container}
                    barTintColor='#fff'
                    titleTextColor='#003164'
                    navigationBarHidden={true}
                    shadowHidden={true}
                    initialRoute={{
                      title: 'Quote',
                      component: Home
                    }}
                />

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#032c64',
        zIndex: 2
    },
    intro: {
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
    introHide:{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    logo: {
        color: '#fff',
        fontSize: 45,
        backgroundColor: 'rgba(0,0,0,0)',
        fontWeight: '100'
    },
    logoFooter: {
        color: 'rgba(256, 256, 256, 0.5)',
        fontSize: 12,
        backgroundColor: 'rgba(0,0,0,0)',
        fontWeight: '100'
    }
});
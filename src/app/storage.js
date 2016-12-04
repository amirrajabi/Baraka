// /**
//  * Created by Amir on 24/11/16.
//  */
//
// <LinearGradient colors={['rgba(255, 219, 76, 1)', 'rgba(255, 219, 76, 0.4)']} style={styles.content}></LinearGradient>
//
// content: {
//     flex: 1,
//         width: width,
//         height: height,
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         padding: 20,
//         backgroundColor: 'rgba(0,0,0,0)',
//         justifyContent: 'center'
// },
//
//
// var {
//     Platform,
//     TouchableHighlight,
//     TouchableNativeFeedback
// } = React;
//
// var tapSpeed = React.createClass({
//     buttonClicked: function() {
//         console.log('button clicked');
//     },
//     render: function() {
//         var TouchableElement = TouchableHighlight;
//         if (Platform.OS === 'android') {
//             TouchableElement = TouchableNativeFeedback;
//         }
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>
//                     Tap me as fast as you can!
//                 </Text>
//                 <TouchableElement
//                     style={styles.button}
//                     onPress={this.buttonClicked.bind(this)}>
//                     <View>
//                         <Text style={styles.buttonText}>Button!</Text>
//                     </View>
//                 </TouchableElement>
//             </View>
//         );
//     }
// });
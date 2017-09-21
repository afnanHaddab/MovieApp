import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';



export default class FavoritesList extends Component {
    render() {
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',

    },
    appLogo: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#8f182e',
        margin: 10,
        marginBottom: 30

    },
    buttonHome: {

        alignSelf: 'stretch',
        backgroundColor: '#000',
        borderRadius: 5,
        borderWidth: 1,
        width: 180,
        borderColor: '#8f182e',
        margin: 5,

    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('FavoritesList', () => FavoritesList);
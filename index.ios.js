import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import HomePage from './components/homePage/HomePage';
import { Router, Scene, Actions } from 'react-native-router-flux';
import getTheme from './components/themes/components';
import myTheme from './components/themes/variables/myTheme';
import FavoritesList from './components/FavoritesList/FavoritesList';
import SearchPage from './components/SearchPage/SearchPage';
import { Container } from 'native-base';


export default class movieApp extends Component {

    render() {
        return (
            <Container>
                <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
                    <Scene key="HomePage" header={visible = false} component={HomePage} />
                    <Scene key="SearchPage" component={SearchPage} title="Search Movies" />
                    <Scene key="FavoritesList" component={FavoritesList} title="My Favourite" />
                </Router>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#8f182e',
        borderBottomWidth: 0
    },
    navBarTitle: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    barButtonTextStyle: {
        color: '#FFFFFF'
    },
    barButtonIconStyle: {
        tintColor: 'rgb(255,255,255)'
    },

    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('movieApp', () => movieApp);

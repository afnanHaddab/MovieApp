import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router, Scene ,Actions} from 'react-native-router-flux';
import Button from '../button/Button';
import FavoritesList from '../FavoritesList/FavoritesList';
import SearchPage from '../SearchPage/SearchPage';
// import AppHeader from '../AppHeader/AppHeader';
import {Container , Left ,Header, Right,Title,Body}from'native-base';

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.homeBackground}>
        <Body style={styles.container}>
        <Text style={styles.appLogo}>
          MovieApp
        </Text>
        <Button style={styles.buttonHome} onPress={Actions.SearchPage}>
                Search Movies
                </Button>
                <Button style={styles.buttonHome} onPress={Actions.FavoritesList}>
                My Favourite 
                </Button>
        </Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    homeBackground:{
        flex: 1,
backgroundColor: '#8f182e'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  appLogo: {
    fontSize: 35,
    fontWeight:'bold',
    textAlign: 'center',
    color: '#fff',
    margin: 10,
    marginBottom: 30

  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HomePage', () => HomePage);

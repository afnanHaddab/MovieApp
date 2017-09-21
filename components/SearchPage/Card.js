import React, { Component } from 'react';
import{
    View,
    Text
} from 'react-native';


const Card = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}

    </View>
  );
};

const styles = {
  containerStyle:{
    flex:1,
    backgroundColor: '#efefef',
    elevation:1,
    marginLeft:5,
    marginRight:5, 
  }
};

export default Card;




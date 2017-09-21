import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';


const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
      </TouchableOpacity>
  );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#8f182e',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        width: 180,
        borderColor: '#8f182e',
        margin: 5,
        height: 40

  }
};

export default Button;

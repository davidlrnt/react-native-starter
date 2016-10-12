'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

const Button = (props) => {
	const color = props.color || "#53673A";
	const fontSize = props.fontSize || 20;
	return (
		<TouchableHighlight 
				style={[styles.button, {backgroundColor: color}]}
        onPress={props._onPressButton} >
      <View style={{justifyContent: "center"}}>
        <Text style={{fontSize, textAlign: "center"}}>{props.text}</Text>
      </View>
    </TouchableHighlight>
	)
}

var styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
		justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#111'
  }
})

export default Button
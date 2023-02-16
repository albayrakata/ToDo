import React, { useState } from "react";
import { TextInput, View, Button, Alert, Text } from "react-native";
import styles from './ToDoInput.style'


const ToDoInput = props => {

 
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
       placeholderTextColor={'#808080'}
        placeholder="Yapılacaklar..."
        onChangeText={props.AddText}
        
      />
    </View>
  )
}
export default ToDoInput;

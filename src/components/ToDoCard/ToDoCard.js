import React from "react"
import { View,Text } from "react-native"
import styles from './ToDoCard.style'


const ToDo = props =>{
    
    return(
        <View style={styles.container}>
       <Text style={styles.text}>{props.updated}</Text>
        </View>
    )
}

export default ToDo;
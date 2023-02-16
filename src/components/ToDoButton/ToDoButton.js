import React from "react";
import styles from './ToDoButton.style'
import { TextInput, View, Button } from "react-native";

const ToDoButton = props => {
    return (
        <View style={styles.main}>
            <Button style={styles.button}
                title="Kaydet"
                onPress={props.handleClick}
                color="white"
            />
        </View>
    )
}
export default ToDoButton;
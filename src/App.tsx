import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, Button, View, FlatList, Alert, } from "react-native";
import ToDoInput from "./components/ToDoInput";
import ToDoButton from "./components/ToDoButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function App() {

  const [text, setText] = useState('');
  const [updated, setUpdated] = useState(text);
  const [data, setData] = useState([{ text }])
  const [count, setCount] = useState(0)


  const handleClick = () => {
    setUpdated(text)
    if (text) setData([...data, { text: text, }])
    if (text) setCount(count + 1)
  }

  const deleteAll = (item:any) => {

    const allData = data.filter(item => text !== text);
    setData(allData)
    setCount(0)
  }

 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Yapılacaklar </Text>
        <Text style={styles.count}>{count} </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) =>
          <View style={styles.text_container}>
            <BouncyCheckbox
              size={20}
              unfillColor="white"
              text={item.text}
              onPress={(isChecked: boolean) => { 
                
                if (text) setCount(count - 1)
                

              
              }}
              style={styles.text_container}
              textStyle={styles.text}
            />

          </View>

        }
      />
      <View style={styles.inputBackground}>

        <ToDoInput AddText={newText => setText(newText)} />
        <ToDoButton handleClick={handleClick} />
        <View style={styles.delete_button}>
          <Button title="Sil" onPress={(deleteAll)} color="white" />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#102027",
    flex: 1
  },
  title_container: {
    flexDirection: "row"
  },
  title: {
    color: "#ffa500",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10

  },
  count: {
    color: "#ffa500",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,


  },
  inputBackground: {
    backgroundColor: "#37474f",
    padding: 10,
    margin: 20,
    borderRadius: 10,

  },
  text_container: {
    padding: 5,
    margin: 13,
    backgroundColor: "#7da453",
    borderRadius: 5
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  delete_button: {
    backgroundColor: "#b92631",
    margin: 5,
    padding: 1,
    borderRadius: 10
  }

})
export default App;


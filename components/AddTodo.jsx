import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

const AddTodo = () => {
  const [value, onChangeText] = React.useState("Useless Placeholder");

  return (
    <View>
      <Text style={styles.title}>Add a Todo</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 260,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 18,
  },
});

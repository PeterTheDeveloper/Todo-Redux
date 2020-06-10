import React, { Component } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import AddTodo from "./AddTodo.jsx";

const TodoList = ({ todos }) => {
  return (
    <View style={styles.container}>
      <AddTodo />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {},
});

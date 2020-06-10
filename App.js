import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
// import store from "./store/store";
import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";
import VisibilityFilter from "./components/VisibilityFilter.jsx";

export default function App() {
  const filters = ["all", "completed", "incomplete"];

  return (
    <ScrollView style={styles.container}>
      <TodoList todos={[{ content: "Task 1" }, { content: "Task 2" }]} />
      <VisibilityFilter filters={filters} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from "./actionTypes";

const Filters = [FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE];
let todoId = 0;

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    id: todoId++,
    todo,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});

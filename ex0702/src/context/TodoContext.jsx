import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import {initialTodos, todoAPI} from  '../utils/data.js'
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  const [showTodoForm, setShowTodoForm] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

   // 비동기 0702 6시수업
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  
  useEffect(() => {
    loadTodos()
  }, [])

 
   // 비동기 0702 6시수업
  const loadTodos = async () => {
    try{
      setLoading(true);
      const data = await todoAPI.fetchTodos();
      setTodos(data);
    }catch(e){
      setError(true);
      throw Error();
    }finally{
      setLoading(false)
    }
  }

  const handleAddTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const handleConfirmDelete = () => {
    if (todoToDelete) {
      setTodos(prevTodos => prevTodos.filter(todo =>
        todo.id !== todoToDelete
      ))
      setTodoToDelete(null)
    }
    setShowConfirmDialog(false)
  }

  const handleCancleDelete = () => {
    setTodoToDelete(null)
    setShowConfirmDialog(false)

  }

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter)
  }

  const handleDeleteTodo = (todoId) => {
    setTodoToDelete(todoId)
    setShowConfirmDialog(true)
  }

  const handleToggleComplete = (todoId) => {
    setTodos(
      prevTodos => prevTodos.map(todo =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ))
  }

  const opneTodoForm = () => setShowTodoForm(true);
  const closeTodoForm =() => setShowTodoForm(false);

  const value = {
    // state
    todos,
    currentFilter,
    showTodoForm,
    showConfirmDialog,
    todoToDelete,
    // 함수
    handleToggleComplete,
    handleDeleteTodo,
    handleConfirmDelete,
    handleCancleDelete,
    handleAddTodo,
    handleFilterChange,
    opneTodoForm,
    closeTodoForm
  }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useAuth be used within an AuthProvider")
  }
  return context;
}

import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import {initialTodos, todoAPI} from  '../utils/data.js'
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // 일 추가하는 상태
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
   // 밑에 있는 데이터들은 사실 백엔드가 가져 있어야함
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

  //새로운 할 일 추가
  const handleAddTodo = async(newTodo) => {
    try{
      const addedTodo = await todoAPI.addTodo(newTodo)
      setTodos(prevTodos => [...prevTodos, newTodo])
      return { success : true };
    }catch(e){
      return { success : false, error : e.message};
    }
    
   
  }

  
  //삭제 확인 처리
  const handleConfirmDelete = async () => {
    if(!todoToDelete) return;

    try{
     await todoAPI.deleteTodo(todoToDelete)
      setTodos(prevTodos => prevTodos.filter(todo =>todo.id !== todoToDelete))
      setTodoToDelete(null)
    }catch(e){

    }finally{
      setShowConfirmDialog(false)
    }

    // if (todoToDelete) {
    //   setTodos(prevTodos => prevTodos.filter(todo =>
    //     todo.id !== todoToDelete
    //   ))
    //   setTodoToDelete(null)
    // }
    // setShowConfirmDialog(false)
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

  // 할 일 완료 상태 토글
  const handleToggleComplete = async(todoId) => {
    try{
       const todo = todos.find(t => t.id === todoId)
    if(!todo) return;

    const result = await todoAPI.toggleTodo(todoId, !todo.isCompleted)
    setTodos(
      prevTodos => prevTodos.map(todo =>
        todo.id === todoId ? { ...todo, isCompleted: result.isCompleted } : todo
      ))
    }catch(e){
      
    }
    
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

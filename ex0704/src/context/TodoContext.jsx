import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import {  todoAPI } from '../utils/data.js'
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

  /* 0704 1시 개념 설명 생명주기, 커스텀 훅   [] 최초에 한 번 실행
   리액트 클래스 컴포넌트 -> 함수형 컴포넌트로 변경
   변경을 위해 훅이란 개념이 생김
   훅:함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 잇게 해주는 함수
  
   컴포넌트 생명주기
   컴포넌트 생성, 업데이트, 사라질 때 까지의 일련의 과정

   1. 클래스 컴포넌트의 라이프사이클
   (1) 마운트(Mount) -> 컴포넌트 태어났을때(생성)

   constructor -> render -> componentDidMount

   (2) 업데이트(Update) -> 살아 있는 중

    shouldComponentUpdate -> render ->componentDidUpdate

   (3) 언마운트(UnMount) -> 죽어 있을 때

    componentWillUnmount(클래스 컴포넌트일 때)


    2. 함수형 컴포넌트 생명주기(useEffect)
    (1) 함수형 컴포넌트에서는 훅으로 라이플 사이클일 제어 할 수 있게 제공
     제어할 수 있게 해주는게 [] 이다
     
    (2) [] 값에 따라 useEffect가 다르게 작동한다
    
    ex)
    useEffect(() => {
      컴포넌트가 마운트 될 때 실행 최초에 한번만 실행 = compontDidMount      
      }, [])
   
    useEffect(() => {
            
      }, [todo])

    useEffect(() => {
            
      return () => {
        clearInterval(id)
          }
      }, [todos])

   정리
   - 라이프사이클은 컴포넌트의 생명주기 (생성-업데이트-소멸) 전체를 의미
   - 클래스 컴포넌트는 라이플사이클 메서드, 함수형 컴포넌트는 useEffect로 제어
   - 적절한 시점에 필요한 작업(데이터, fetch, 정리)을 넣는 것이 중요

   커스텀 훅
   여러 컴포넌트에서 반복되는 로직
   (예: 데이터, fetch, 폼 관리)을 재사용하기 위해 직접 만드는 훅(use가 들어가면 훅)
   useFetch()

   대표적인 내장 훅
   useState -> 상태 관리
   useEffect -> useEffect
   useContext -> 중앙 관리: 요청이 들어오면 렌더링 또는 수정 하겠다
   useRef -> 주소값을 변하지 않고 그대로 넣어줘 
   useMemo -> 최적화 할 때 쓰임 
   useCallback -> 함수를 자체를 최적화 하기 위해서 씀 
   등등 
   */

  useEffect(() => {
    loadTodos()
  }, [])


  // 비동기 0702 6시수업
  // 밑에 있는 데이터들은 사실 백엔드가 가져 있어야함
  const loadTodos = async () => {
    try {
      setLoading(true);
      const data = await todoAPI.fetchTodos();
      setTodos(data);
    } catch (e) {
      setError(true);
      throw Error();
    } finally {
      setLoading(false)
    }
  }

  //새로운 할 일 추가
  const handleAddTodo = async (newTodo) => {
    try {
      const addedTodo = await todoAPI.addTodo(newTodo)
      setTodos(prevTodos => [...prevTodos, newTodo])
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }


  }


  //삭제 확인 처리
  const handleConfirmDelete = async () => {
    if (!todoToDelete) return;

    try {
      await todoAPI.deleteTodo(todoToDelete)
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoToDelete))
      setTodoToDelete(null)
    } catch (e) {

    } finally {
      setShowConfirmDialog(false)
    }
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
  const handleToggleComplete = async (todoId) => {
    try {
      const todo = todos.find(t => t.id === todoId)
      if (!todo) return;

      const result = await todoAPI.toggleTodo(todoId, !todo.isCompleted)
      setTodos(
        prevTodos => prevTodos.map(todo =>
          todo.id === todoId ? { ...todo, isCompleted: result.isCompleted } : todo
        ))
    } catch (e) {

    }

  }

  const opneTodoForm = () => setShowTodoForm(true);
  const closeTodoForm = () => setShowTodoForm(false);

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

import React, { use, useEffect, useState } from 'react'
import Header from '../../components/ui/Headers'
import { useNavigate } from 'react-router-dom'
// data의 todos 이름이 겹쳐서 별칭으로 사용해서 이름 중복 방지
import {todos as initialTodos} from '../../utils/data'
import TodoList from '../../components/todo/TodoList';
import TodoCard from '../../components/todo/TodoCard';
import TodoFilter from '../../components/todo/TodoFilter'
import TodoForm from '../../components/todo/TodoForm'
function TodoPage({ currentUser, onLogout }) {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [showTodoForm, setShowTodoForm] = useState(false);

  useEffect(() => {
    setTodos(initialTodos);
  }, [])

  const handleLogout =   () => {
    onLogout();
    navigate('/login');
  }

  if(!currentUser){
    navigate('/login')
    return null
  }

  const handleAddTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  // 7/2 1시 시작
  // todo페이지 항목 완료 했는지 안했는지 확인하는 함수
  const handleToggleComplete = (todoId) => {
    setTodos(
      prevTodos => prevTodos.map(todo =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ))
  }

  // 삭제
  const handleDeleteTodo = (todoId) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      setTodos(prevTodos => prevTodos.filter(todo =>
        todo.id !== todoId
      ))
    }
  }

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter)
  }

  return (

    <div className="bg-light">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <div className='container mt-4'>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>할 일 목록</h2>
        
        </div>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => setShowTodoForm(true)}
          >
            할 일 추가
          </button>

          {<TodoFilter
              currentFilter={currentFilter}
              onFilterChange={handleFilterChange}
            />}
          </div>
        </div>
        <TodoList
          todos={todos}
          currentFilter={currentFilter}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
        />
        <TodoForm 
          show = {showTodoForm}
          onClick={()=>setShowTodoForm(false)}
          onAddTodo = {handleAddTodo}
        />
      </div>
    </div>

  )
}

export default TodoPage
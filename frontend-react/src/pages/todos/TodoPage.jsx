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
  const [currentFilter, setcurrentFilter] = useState('all');
  const [shadowTodoForm, setShowTodoForm] = useState(false);

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

          <TodoFilter 
          currentFilter={currentFilter}
           // onFilterChange={handleFilterChange}
          />
          </div>
        </div>
        <TodoList todos={ todos } currentFilter={currentFilter} />
        <TodoForm 
          show = {shadowTodoForm}
          onClick={()=>setShowTodoForm(false)}
          onAddTodo = {handleAddTodo}
        />
      </div>
    </div>

  )
}

export default TodoPage
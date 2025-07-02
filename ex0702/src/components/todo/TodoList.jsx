import React from 'react'
import TodoCard from './TodoCard';
import EmptyState from '../ui/EmptyState';

function TodoList({todos, currentFilter, onToggleComplete, onDeleteTodo}) {
  const getFilterTodos = () =>{
    switch(currentFilter){
      case 'completed':
        return todos.filter(todo => todo.isCompleted);
       case 'incompleted':
        return todos.filter(todo => !todo.isCompleted);
        default:
          return todos;
    }
  }

  
  const filteredTodos = getFilterTodos();

  // 0702 1시
  if(filteredTodos.length === 0){
    return(<EmptyState 
      message="표시할 일이 없습니다."
      currentFilter={currentFilter}
    />)
  }

  return (
    <div className ="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      {filteredTodos.map(todo => (
          <div key={todo.id} className='col'>
            <TodoCard
            // Id로 받아와서 안에 카드 컴포넌트 안으로 씀
             onToggleComplete = {onToggleComplete}
             onDeleteTodo = {onDeleteTodo}
             todo={todo}
            />
          </div>
        ))} 
      </div>   
  )
}

export default TodoList
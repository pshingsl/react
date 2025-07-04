import React from 'react'
import TodoCard from './TodoCard';
function TodoList({todos, currentFilter}) {
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

  return (
    <div className ="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      {filteredTodos.map(todo => (
          <div key={todo.id} className='col'>
            <TodoCard
              todo={todo}
            />
          </div>
        ))} 
      </div>   
  )
}

export default TodoList
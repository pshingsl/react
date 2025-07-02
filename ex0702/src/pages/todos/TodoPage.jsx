import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Headers';
import TodoList from '../../components/todo/TodoList';

import TodoForm from '../../components/todo/TodoForm'
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import TodoActions from '../../components/ui/TodoActions';
import TodoStats from '../../components/ui/TodoStats';

import { useTodo } from '../../context/TodoContext';
import { useAuth } from '../../context/AuthContext';


function TodoPage() {
  const navigate = useNavigate();

  const { todos,
    currentFilter,
    showTodoForm,
    showConfirmDialog,
    handleToggleComplete,
    handleDeleteTodo,
    handleConfirmDelete,
    handleCancleDelete,
    handleAddTodo,
    handleFilterChange,
    opneTodoForm,
    closeTodoForm} = useTodo();

    const {logout, currentUser} = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

 
 

  return (
    <div className="bg-light ">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <TodoStats
            todos={todos} />
          <TodoActions
            onAddClick={opneTodoForm}
            currentFilter={currentFilter}
            onFilterChange={handleFilterChange}
          />
        </div>
        <TodoList
          todos={todos}
          currentFilter={currentFilter}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
        />

        <TodoForm
          show={showTodoForm}
          onClose={closeTodoForm}
          onAddTodo={handleAddTodo}
        />

        <ConfirmDialog
          show={showConfirmDialog}
          title="할 일 삭제"
          message="정말로 이 할 일을 삭제하시겠습니까?"
          confirmText="삭제"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancleDelete}
        />
      </div>
    </div>
  )
}

export default TodoPage
import React from 'react'
import Header from '../../components/ui/Headers'
import { useNavigate } from 'react-router-dom'

function TodoPage({ currentUser, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  }

  if(!currentUser){
    navigate('/login')
    return null
  }
  
  return (
    <div className="bg-light">
      <Header currentUser={currentUser} onLogout={handleLogout} />
  
  </div >
  )
}

export default TodoPage
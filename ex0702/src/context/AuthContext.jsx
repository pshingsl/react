import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";

// 로그인 관련 Context 생성
const AuthContext = createContext();

// auth Provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false)
  }, [])

  // 로그인
  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem(
      'currentUser', 
      JSON.stringify(userData))
  }

    // 로그아웃시 ->로컬스토리지에 유저 데이터의 매개변수를 삭제
  const logout = () => { 
    setCurrentUser(null);
    localStorage.removeItem('currentUser')
  }

  const value = {
    currentUser,
    loading,
    login,
    logout
  }

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context){
    throw new Error("useAuth be used within an AuthProvider")
  }
  return context;
}

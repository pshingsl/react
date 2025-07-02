import React, { createContext, useEffect, useState } from "react";
// createContext: 데이터를 공유할 상자를 만든다
// useEffect: 컴포넌트가 화면에 나타내거나 데이터가 바뀔 때 어떤 작업을 할지 쓴다
import { useContext } from "react";
//useContext:만들어 둔 데이터 상자에서 원하는 데이터를 꺼내 쓴다.

// 로그인 관련 Context 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 생성 모든 자식들은 children에게 전달
// App.jsx에 AuthProvider 안에 있는 태그들이 영향을 받는다.
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // localStorage에 유저를 저장한다
    const user = localStorage.getItem('currentUser');
    // 유저가 존재한다면 JSON 형태로 유저를 setCurrentUser담는다
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    // 사용자 정보를 확인 했으니, 로딩을 끝낸다는걸 false로 변경
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

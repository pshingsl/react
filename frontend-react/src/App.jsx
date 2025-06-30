
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LoginPage from './pages/auth/LoginPage'
import TodoPage from './pages/todos/TodoPage'
// 6월30일 2시 수업
import './assets/styles/App.css'
import './assets/styles/index.css'
// 6월30일 3시 수업
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // 대괄호에 값이 없으면 최초에 한번만 실행 -> 로그인 처음 성공시 
  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if(user){
      setCurrentUser(JSON.parse(user));
    }
  }, [])

  // 로그인 성공시 -> 로컬스토리지에 유저 데이터의 매개변수를 저장
  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData))
  }

  // 로그아웃시 ->로컬스토리지에 유저 데이터의 매개변수를 삭제
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser')
  }

  // 로그인, 아웃 만든 이유: 프롭스로 전달하기 위해 = 로그인 페이지로 전달

  return (
 <BrowserRouter> 
    <Routes>
        <Route path="/login" element={<LoginPage currentUser={currentUser} 
        onLogin={login}
        />}/>

        <Route path="/todo" element={<TodoPage currentUser={currentUser} 
        onLogout={logout}
        />}/>

         <Route path="*"element={<LoginPage currentUser={currentUser} 
        onLogin={login}
        replace/>}
        />

    </Routes>
  </BrowserRouter>
  );
}

export default App;

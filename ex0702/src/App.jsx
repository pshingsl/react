
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from './pages/auth/LoginPage'
import TodoPage from './pages/todos/TodoPage'
import './assets/styles/App.css'
import './assets/styles/index.css'
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TodoProvider>    <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/todo" element={<TodoPage  />}/>
          <Route path="*" element={<LoginPage replace />}
          />
        </Routes>
        </TodoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;


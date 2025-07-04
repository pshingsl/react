import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from './pages/auth/LoginPage';
import TodoPage from './pages/todos/TodoPage';
import './assets/styles/App.css';
import { AuthProvider, useAuth } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, //
      cacheTime: 10 * 60 * 1000, // 
      retry: 3,                   //
      refetchOnWindowFocus: false, //
    },
  }
})

const AppRoutes = () => {
  const { loading } = useAuth();

  // if (!loading) {
  //   return <div>Loding....</div>
  // }


  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/" element={<LoginPage replace />}
      />
    </Routes>
  )
}

function App() {
  return (
    // QueryClientProvider 라우트 위에다 선언 해야함
     <QueryClientProvider  client={queryClient}> 
    <BrowserRouter>
      <AuthProvider>
          <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
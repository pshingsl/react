import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

// 6월27일 1시 수업 리액트 라우터 돔 사용 
// <BrowserRouter> 키워드 검색
import {Routes, Route, BrowserRouter} from "react-router-dom";

// 6월27일 2시 수업  리액트로 비동기 데이터 가져오는 방식 npm install @tanstack/react-query
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"


function App() {
  const queryClient = new QueryClient();

  return (
 <BrowserRouter> 
  <QueryClientProvider client={queryClient}>
    <Routes>
        {/* 브라우저의 접속경로가 / */}
        <Route path="/"element={<Home/>}/>
        <Route path="/:id"element={<Home/>}/>
    </Routes>
  </QueryClientProvider>
  </BrowserRouter>

  );
}

export default App;

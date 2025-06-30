import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {Routes, Route, BrowserRouter} from "react-router-dom";
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

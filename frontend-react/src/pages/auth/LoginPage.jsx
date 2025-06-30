import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { users } from '../../utils/data'

const LoginPage = ({ currentUser, onLogin }) => {
  const navigate = useNavigate();

  // 로그인을 하기 위한 이메일, 비밀번호를 가져옴
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (currentUser) {
      navigate('/todo')
    }
  }, [currentUser, navigate])

  // 로그인 버튼 클릭시 발생하는 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();

    //로그인 검사(원래는 백엔드에서 해야함)
    // 입력값이 없는 경우
    if (!email || !password) {
      setErrorMessage('모든항목을 입력해주세요.')
      return;
    }

    const foundUser = users.find(user => user.email === email &&
      user.password === password)

    if (foundUser) {
      onLogin({ email: foundUser.email })
      navigate('/todo')
    } else {
      //로그인 실패
      setErrorMessage('잘못된 이메일 또는 비밀번호입니다.')
      return;
    }
  }

  const handleTestAccountClick = (email, password) => {
    setEmail(email);
    setPassword(password);
    setErrorMessage('');
  }

  return (
    <div class="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div class="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 class="card-title text-center mb-4">로그인</h2>
        <form onSubmit={handleSubmit} id="loginForm">
          <div class="mb-3">
            <label for="email" class="form-label">이메일 주소</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)
              }></input>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">비밀번호</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <p id="errorMessage" class="text-danger text-center"></p>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">로그인</button>
          </div>
        </form>

        <div className="mt-4 pt-3 border-top">
          <h6 className="text-muted text-center mb-3">테스트 계정</h6>
          <div className="small text-muted">
            <div className="mb-2">
              <button type="button" className="btn btn-outline-secondary btn-sm w-100 mb-1" onClick={() => handleTestAccountClick('user1@example.com', 'password123')}>
                <strong>일반 사용자:</strong> user1@example.com / password123
              </button>
            </div>
            <div className="mb-2">
              <button type="button" className="btn btn-outline-secondary btn-sm w-100 mb-1" onClick={() => handleTestAccountClick('admin@example.com', 'adminpass')}>
                <strong>관리자:</strong> admin@example.com / adminpass
              </button>
            </div>
            <div className="mb-2">
              <button type="button" className="btn btn-outline-secondary btn-sm w-100" onClick={() => handleTestAccountClick('guest@example.com', 'guest')}>
                <strong>게스트:</strong> guest@example.com / guest
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginPage
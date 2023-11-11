import AuthTemplate from 'components/Templates/AuthTemplate';
import { useState } from 'react';
// 필요한 함수, 변수들 import
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { authService } from "fbase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthPage = () => {
  // state 정의
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccout] = useState(true);
  const [error, setError] = useState("");

  // 이메일, 비밀번호 입력 처리 함수
  const onChange = (event) => {
    const { target: {name, value} } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  // 계정 생성 또는 로그인 처리 함수
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // 계정 생성
        data = await createUserWithEmailAndPassword(authService, email, password);
      } else {
        // 로그인
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }

  // 계정 생성, 로그인 토글 함수
  const toggleAccount = () => setNewAccout((prev) => !prev);

  // 소셜 로그인 처리 함수
  const onSocialClick = async (event) => {
    const { target: {name} } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  }

  return (
    <AuthTemplate
      onSubmit={onSubmit}
      email={email}
      password={password}
      onChange={onChange}
      newAccount={newAccount}
      error={error}
      toggleAccount={toggleAccount}
      onSocialClick={onSocialClick}
    />
  );
}

export default AuthPage;

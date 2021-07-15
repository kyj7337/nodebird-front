import { useEffect, useState } from 'react';
import { kakaoId, kakaoRestApiKey } from '../../api';
import { axios } from '../../api/axiosComponent';
import './index.scss';
const { Kakao } = window;

const LoginComponent = ({ onClickKakaoLogin, onClickSignUp, setUserInfo }) => {
  const [email, setEmail] = useState('1@1.com');
  const [pw, setPw] = useState('1234');

  const login = () => {
    if (email && pw) {
      axios
        .post('/auth/login', {
          email,
          password: pw,
        })
        .then((res) => {
          const { data } = res;
          setUserInfo({
            email: data.email,
            nick: data.nick,
          });
        })
        .catch((err) => {
          if (err.response) {
            const { data } = err.response;
            alert(data.message);
          } else {
            alert('시스템에러 입니다.');
          }
        });
    } else {
      alert('입력해주세요~');
    }
  };
  return (
    <>
      <div className='login-row'>
        <span className='label'>이메일</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='login-row'>
        <span className='label'>비밀번호</span>
        <input value={pw} type='password' onChange={(e) => setPw(e.target.value)} />
      </div>
      <div className='login-row side'>
        <button className='login' onClick={login}>
          로그인
        </button>
        <button className='kakao' onClick={onClickKakaoLogin}>
          카카오톡
        </button>
        <button className='sign-up' onClick={onClickSignUp}>
          회원가입
        </button>
      </div>
    </>
  );
};
const SignUpComponent = ({ setIsSignUp, setUserInfo }) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [nick, setNick] = useState('');
  const signUp = () => {
    console.log(email, pw, nick);
    if (email && pw && nick) {
      axios
        .post('/auth/sign-in', {
          email,
          password: pw,
          nick,
        })
        .then((res) => {
          const { email, nick } = res.data;
          setUserInfo({
            email,
            nick,
          });
        })
        .catch((err) => {
          setPw('');
          setEmail('');
        });
    } else {
      alert('양식을 입력해주세요.');
    }
  };
  return (
    <>
      <div className='login-row'>
        <span className='label'>이메일</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='login-row'>
        <span className='label'>비밀번호</span>
        <input value={pw} onChange={(e) => setPw(e.target.value)} type='password' />
      </div>
      <div className='login-row'>
        <span className='label'>닉네임</span>
        <input value={nick} onChange={(e) => setNick(e.target.value)} />
      </div>
      <div className='login-row side'>
        <button onClick={() => setIsSignUp(false)}>뒤로가기</button>
        <button onClick={signUp}>등록</button>
      </div>
    </>
  );
};

const Login = ({ setUserInfo }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const onClickKakaoLogin = () => {};
  const onClickSignUp = () => {
    setIsSignUp(true);
  };
  return (
    <div className='login-container'>
      {isSignUp ? (
        <SignUpComponent setIsSignUp={setIsSignUp} setUserInfo={setUserInfo} />
      ) : (
        <LoginComponent
          onClickKakaoLogin={onClickKakaoLogin}
          onClickSignUp={onClickSignUp}
          setUserInfo={setUserInfo}
        />
      )}
    </div>
  );
};

export default Login;

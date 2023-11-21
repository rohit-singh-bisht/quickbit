import styled from "styled-components";
import { Styles } from "../interfaces";
import { useThemeContext } from "../context/ColorThemeContext";
import Button from "../components/Button";
import { ChangeEvent, useState } from "react";
import { useFetch } from "../hooks/useFetch";

interface FormData {
  email: string;
  password: string;
}

const LoginStyle = styled.div<Styles>`
  display: flex;
  align-items: center;
  justify-content: center;
  .form__holder {
    margin-top: 8rem;
    max-width: 600px;
    width: 100%;
    .title {
      font-size: 3.2rem;
      color: ${({ themeColor }) => themeColor?.text};
      margin-bottom: 5rem;
      text-align: center;
      text-decoration: underline;
    }
    .form_group {
      margin-top: 2.4rem;
      input {
        width: 100%;
        height: 4.8rem;
        outline: none;
        padding: 0 2rem;
        background: rgba(0, 0, 0, 0) !important;
        border: 0px;
        border-bottom: 0.4rem solid ${({ themeColor }) => themeColor?.border};
        color: ${({ themeColor }) => themeColor?.text} !important;
        font-size: 1.6rem;
        letter-spacing: 0.05rem;
        &:-webkit-autofill {
          background: rgba(0, 0, 0, 0) !important;
        }
      }
    }
    .login_button {
      width: 100%;
      border-radius: 0;
      margin-top: 2rem;
    }
  }
`;

const Login = () => {
  const { themeColor } = useThemeContext();
  const [userDetails, setUserDetails] = useState<FormData>({
    email: "",
    password: "",
  });
  const { runFetch, isLoading, error, data } = useFetch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleLogin = () => {
    runFetch({
      url: "login",
      method: "post",
      body: userDetails,
    });
  };

  return (
    <LoginStyle themeColor={themeColor}>
      <div className="form__holder">
        <h2 className="title">Login</h2>
        <div className="form_group">
          <input
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            name="email"
            value={userDetails?.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_group">
          <input
            type="password"
            autoComplete="new-password"
            placeholder="Enter Password"
            name="password"
            value={userDetails?.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_group">
          <Button
            className="login_button"
            onClick={handleLogin}
            type="primary"
            title="Login"
          />
        </div>
      </div>
    </LoginStyle>
  );
};

export default Login;

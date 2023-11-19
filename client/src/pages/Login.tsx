import styled from "styled-components";
import { Styles } from "../interfaces";
import { useThemeContext } from "../context/ColorThemeContext";
import Button from "../components/Button";

const LoginStyle = styled.div<Styles>`
  display: flex;
  align-items: center;
  justify-content: center;
  .form__holder {
    max-width: 600px;
    width: 100%;
    .form_group {
      margin-top: 20px;
      input {
        width: 100%;
        height: 4.4rem;
        border-radius: 1rem;
        outline: none;
        padding: 0 1.2rem;
      }
    }
  }
`;

const Login = () => {
  const { themeColor } = useThemeContext();
  return (
    <LoginStyle themeColor={themeColor}>
      <div className="form__holder">
        <div className="form_group">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form_group">
          <input type="password" placeholder="Enter Password" />
        </div>
        <div className="form_group">
          <Button className="login_button" type="primary" title="Login" />
        </div>
      </div>
    </LoginStyle>
  );
};

export default Login;

import styled from "styled-components";
import { Styles } from "../interfaces";
import { useThemeContext } from "../context/ColorThemeContext";
import Button from "../components/Button";

const RegisterStyle = styled.div<Styles>`
  display: flex;
  align-items: center;
  justify-content: center;
  .form__holder {
    margin-top: 4rem;
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
        height: 5rem;
        outline: none;
        padding: 0 2rem;
        background: rgba(0, 0, 0, 0) !important;
        border: 0px;
        border-bottom: 0.4rem solid ${({ themeColor }) => themeColor?.border};
        color: ${({ themeColor }) => themeColor?.text} !important;
        color: #ffffff !important;
        font-size: 1.6rem;
        letter-spacing: 0.04rem;
        &:-webkit-autofill {
          background: rgba(0, 0, 0, 0) !important;
        }
      }
    }
    .register_button {
      width: 100%;
      border-radius: 0;
      margin-top: 2rem;
    }
  }
`;

const Register = () => {
  const { themeColor } = useThemeContext();
  return (
    <RegisterStyle themeColor={themeColor}>
      <div className="form__holder">
        <h2 className="title">Register</h2>
        <div className="form_group">
          <input
            type="text"
            placeholder="Username"
            autoComplete="new-username"
          />
        </div>
        <div className="form_group">
          <input
            type="email"
            placeholder="Enter your email"
            autoComplete="new-email"
          />
        </div>
        <div className="form_group">
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="new-password"
          />
        </div>
        <div className="form_group">
          <Button className="register_button" type="primary" title="Register" />
        </div>
      </div>
    </RegisterStyle>
  );
};

export default Register;

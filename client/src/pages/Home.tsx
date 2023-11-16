import styled from "styled-components";
import { Styles } from "../interfaces";
import { useThemeContext } from "../context/ColorThemeContext";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const HomeStyle = styled.div<Styles>`
  .title__wrapper {
    margin-top: 13rem;
    margin-bottom: 2rem;
    text-align: center;
    .title {
      background-image: ${({ themeColor }) => themeColor?.gradient};
      color: transparent;
      -webkit-background-clip: text;
      font-size: 6rem;
      font-weight: 800;
      line-height: 8rem;
      text-align: center;
      display: inline-block;
    }
  }
  .subtitle {
    max-width: 63.4rem;
    margin: auto;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.4rem;
    color: ${({ themeColor }) => themeColor?.text};
    margin-bottom: 4.6rem;
  }
  .url__input {
    text-align: center;
    width: 65.9rem;
    margin: auto;
    position: relative;
    .input {
      width: 100%;
      border-radius: 4.8rem;
      border: 0.4rem solid #353c4a;
      background: ${({ themeColor }) => themeColor?.inputBackground};
      color: ${({ themeColor }) => themeColor?.text};
      box-shadow: 0rem 0.4rem 1rem 0rem rgba(0, 0, 0, 0.1);
      padding: 2.1rem 2.5rem 2.1rem 7rem;
      outline: none;
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 2.8rem;
      text-decoration: none;
      &.error {
        border-color: #b63939;
        animation: zigzag 0.25s ease-in 2;
      }
    }
    .shorten__button {
      position: absolute;
      right: 0.8rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .five_links_prompt {
    font-size: 1.4rem;
    font-weight: 300;
    margin-top: 1.6rem;
    text-align: center;
    color: ${({ themeColor }) => themeColor?.text};
    span {
      font-weight: 700;
      color: ${({ themeColor }) => themeColor?.primaryPink};
    }
  }
  .register__now__wrapper {
    height: 9rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    .blurred {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        180deg,
        rgba(11, 16, 27, 0) 15.74%,
        rgba(11, 16, 27, 0.57) 50.38%
      );
      filter: blur(2.1rem);
      backdrop-filter: blur(2rem);
    }
    .text {
      color: ${({ themeColor }) => themeColor?.text};
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 0rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .register__now {
        color: ${({ themeColor }) => themeColor?.primaryBlue};
        display: inline-block;
      }
    }
  }

  @keyframes zigzag {
    0% {
      transform: translateX(-15px);
    }
    25% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(15px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const Home = () => {
  const { themeColor } = useThemeContext();
  const { runFetch, isLoading, error, data } = useFetch();
  const [redirectUrl, setRedirectUrl] = useState<any>();
  const ApiPort = process.env.REACT_APP_API_PORT;
  const [inputError, setInputError] = useState(false);

  const handleClick = () => {
    if (!redirectUrl) {
      setInputError(true);
      return null;
    }
    runFetch({
      url: "",
      method: "post",
      body: { url: redirectUrl },
    });
  };

  return (
    <HomeStyle themeColor={themeColor}>
      <div className="container">
        <div className="title__wrapper">
          <h1 className="title">Shorten Your Loooong Links :)</h1>
        </div>
        <p className="subtitle">
          Quickbit is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>

        <div className="url__input">
          <input
            type="text"
            className={`input ${inputError && "error"}`}
            placeholder="Enter the link here"
            value={redirectUrl}
            onChange={(e) => {
              setInputError(false);
              setRedirectUrl(e.target.value);
            }}
          />
          <Button
            type={"primary"}
            title={"Shorten Now!"}
            className="shorten__button"
            onClick={handleClick}
          />
        </div>

        {data?.success && (
          <div className="five_links_prompt">
            {ApiPort}
            {data?.shortId}
          </div>
        )}

        <div className="five_links_prompt">
          You can create <span>05</span> more links. Register Now to enjoy
          Unlimited usage
        </div>

        <div className="register__now__wrapper">
          <div className="blurred" />
          <div className="text">
            <Link to="/register" className="link">
              Register Now
            </Link>{" "}
            to enjoy Unlimited History
          </div>
        </div>
      </div>
    </HomeStyle>
  );
};

export default Home;

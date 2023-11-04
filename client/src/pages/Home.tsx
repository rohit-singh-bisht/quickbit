import React from "react";
import styled from "styled-components";
import { Styles } from "../interfaces";
import { useThemeContext } from "../context/ColorThemeContext";

const HomeStyle = styled.div<Styles>`
  .title {
    background-image: ${({ themeColor }) => themeColor?.gradient};
    color: transparent;
    -webkit-background-clip: text;
    font-size: 6rem;
    font-weight: 800;
    line-height: 8rem;
    text-align: center;
    margin-top: 13rem;
    margin-bottom: 2rem;
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
`;

const Home = () => {
  const { themeColor } = useThemeContext();
  return (
    <HomeStyle themeColor={themeColor}>
      <h1 className="title">Shorten Your Loooong Links :)</h1>
      <p className="subtitle">
        Quickbit is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </p>
    </HomeStyle>
  );
};

export default Home;

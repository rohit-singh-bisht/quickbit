import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToggleTheme from "./components/ToggleTheme";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ToggleTheme />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

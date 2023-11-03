import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  return (
    <>
      <ToggleTheme />
      <BrowserRouter>
        <Header />
        <Routes>{/* <Route path="/" element={}></Route> */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h2>Hello worlds</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FilterJob from "./FilterJob";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:search" element={<FilterJob />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

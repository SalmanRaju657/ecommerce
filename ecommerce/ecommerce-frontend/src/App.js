import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Products from "./Products.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
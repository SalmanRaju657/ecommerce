import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* IMPORTANT FIX */}
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
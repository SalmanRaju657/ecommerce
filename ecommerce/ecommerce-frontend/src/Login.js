import axios from "axios";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://ecommerce-backend-ow09.onrender.com/api/token/", {
        username: username,
        password: password,
      });

      // store token
      localStorage.setItem("token", res.data.access);

      alert("Login Success ✅");

      // go to products page
      window.location.href = "/";
    } catch (err) {
      alert("Login Failed ❌");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
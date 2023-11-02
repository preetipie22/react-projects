import React, { useCallback, useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const { setUser } = useContext(UserContext);

  const handleSubmit = () => {
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

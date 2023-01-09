import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

const AuthLogin = () => {
  const dispatch = useDispatch();

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => dispatch(login({ email, password }));

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <p className="font-nunito text-primary">Login Rakamin Mini Project</p>
      <input
        type="text"
        placeholder="username"
        value={email}
        onChange={handleUsername}
        className="mx-2 my-2 outline w-1/2"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePassword}
        className="mx-2 my-2 outline w-1/2"
      />
      <button
        onClick={handleLogin}
        className="border border-primary w-3/6 mx-2 my-2"
      >
        Login
      </button>
    </div>
  );
};

export default AuthLogin;

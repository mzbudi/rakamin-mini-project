import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  register,
  selectAuth,
  closeErrorModal,
} from "../slices/authSlice";
import Modal from "../components/Modal";

const AuthLogin = () => {
  const dispatch = useDispatch();

  const loginStatus = useSelector(selectAuth);

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registEmail, setRegistEmail] = useState("");
  const [registPassword, setRegistPassword] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistUsername = (e) => {
    setRegistEmail(e.target.value);
  };

  const handleRegistPassword = (e) => {
    setRegistPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLogin = () => dispatch(login({ email, password }));

  const handleRegister = () => {
    const data = {
      name: name,
      email: registEmail,
      password: registPassword,
      password_confirmation: registPassword,
    };
    dispatch(register(data));
  };

  const handleCloseModal = () => {
    dispatch(closeErrorModal());
    setIsOpen(false);
  };

  useEffect(() => {
    if (loginStatus.error !== "") {
      setIsOpen(true);
    }
  }, [loginStatus.error]);

  const modalConfig = {
    title: "Login Failed",
    content: loginStatus.error,
    actionButton: (
      <button
        type="button"
        className="flex flex-row justify-center ml-[5px] rounded-md shadow-sm border border-danger bg-danger px-4 py-2 text-sm font-medium text-white hover:bg-danger focus:outline-none focus-visible:ring-2 focus-visible:ring-borderDanger focus-visible:ring-offset-2"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <p className="font-nunito text-sm leading-6 text-white">Ok</p>
      </button>
    ),
  };

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center justify-center h-screen w grow">
      <div className="w-full px-4 mt-4 flex flex-col items-center justify-center space-y-3">
        <p className="font-nunito text-primary">Login Rakamin Mini Project</p>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={handleUsername}
          className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
          className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
        />
        <button
          onClick={handleLogin}
          className="flex flex-row justify-center ml-[5px] rounded-md shadow-sm border border-borderPrimary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-borderPrimary focus:outline-none focus-visible:ring-2 focus-visible:ring-borderPrimary focus-visible:ring-offset-2"
        >
          Login
        </button>
      </div>
      <div className="w-full px-4 mt-4 flex flex-col items-center justify-center space-y-3">
        <p className="font-nunito text-primary">
          Register Rakamin Mini Project
        </p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
          className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
        />
        <input
          type="text"
          placeholder="Username"
          value={registEmail}
          onChange={handleRegistUsername}
          className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
        />
        <input
          type="password"
          placeholder="Password"
          value={registPassword}
          onChange={handleRegistPassword}
          className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
        />
        <button
          onClick={handleRegister}
          className="flex flex-row justify-center ml-[5px] rounded-md shadow-sm border border-borderPrimary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-borderPrimary focus:outline-none focus-visible:ring-2 focus-visible:ring-borderPrimary focus-visible:ring-offset-2"
        >
          Register
        </button>
      </div>
      <Modal
        modalConfig={modalConfig}
        isOpen={isOpen}
        setIsOpen={handleCloseModal}
      />
    </div>
  );
};

export default AuthLogin;

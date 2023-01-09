import React from "react";
import { useSelector } from "react-redux";
import MainLayout from "./layout/MainLayout";
import Auth from "./page/Auth";
import { selectAuth } from "./slices/authSlice";

const token = localStorage.getItem("auth_token");

function App() {
  const user = useSelector(selectAuth);
  console.log(user);
  return <div>{user.auth_token || token ? <MainLayout /> : <Auth />}</div>;
}

export default App;

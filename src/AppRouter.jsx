import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterLayout from "./layout/RouterLayout";
import App from "./App";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouterLayout />} />
        <Route path="/v1" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

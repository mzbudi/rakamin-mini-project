import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RouterLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/v1");
  }, [navigate]);

  return <div></div>;
};

export default RouterLayout;

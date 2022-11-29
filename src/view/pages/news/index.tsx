import React, { Component, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Index: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed");
    console.log(location)
  }, [location]);

  return <div></div>;
};

export default Index;
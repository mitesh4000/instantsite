import React from "react";
import { Route, Routes } from "react-router";
import Home from "./screen/Home";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default App;

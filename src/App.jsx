import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login"  element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

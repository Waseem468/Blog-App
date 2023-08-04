import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import UserRegister from "./Component/User/UserRegister";
import SinglePage from "./Component/SinglePage";
import Write from "./Component/Write";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import LoginPage from "./Component/User/LoginPage";
import './App.css';
import './style.scss'

const Pages = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Pages />}>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/post/:id"
              element={<SinglePage />} />
            <Route
              path="/write"
              element={<Write />} />
          </Route>
          <Route path={'/register'} element={<UserRegister />} />
          <Route path={'/login'} element={<LoginPage />} />
        </Routes>
      </Router>
      </div>
      
    </div>
  );
}

export default App;

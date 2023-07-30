import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from "./Component/UserLogin";
import UserRegister from "./Component/UserRegister";
import SinglePage from "./Component/SinglePage";
import Write from "./Component/Write";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<div>
            <NavBar />
            <Home />
            <Footer/>
          </div>
          } />
          <Route path={'/register'} element={<UserRegister />} />
          <Route path={'/login'} element={<UserLogin />} />
          <Route path={'/post/:id'} element={<SinglePage />} />
          <Route path='/write' element={<Write />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Shopping from "./Pages/Shopping";
import Singleproduct from "./components/Singleproduct";
import User from "./Pages/User";
import { UserProvider } from "./Usercontext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
          <Route path="/products/:searchQuery" element={<Shopping />} />
          <Route path="/products" element={<Shopping />} />
          <Route path="/singleproduct/:id" element={<Singleproduct />} />
          <Route path="*" element="404 Not Found" />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

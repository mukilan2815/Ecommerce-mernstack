import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Shopping from "./Pages/Shopping";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./Pages/User";
import { UserProvider } from "./Usercontext"; // Make sure this import path is correct

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shopping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
          <Route path="*">"404 Not Found"</Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

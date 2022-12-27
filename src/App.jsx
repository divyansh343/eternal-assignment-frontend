import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ChangeName from './pages/ChangeName';
import ChangePassword from './pages/ChangePassword';
function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/name" element={<ChangeName />} />
        <Route path="/password" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

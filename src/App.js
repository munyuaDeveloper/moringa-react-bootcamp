import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";

import About from "./pages/About";
import Profile from "./protectedPages/Profile";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Protected from "./protectedPages/Protected"
import Login from "./pages/Login";

function App() {

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  // Login logic
  const logInUser = () => {
    setIsLoggedIn(true);
    console.log('User logged in');
  };

  // Logout User
  const logOutUser = () => {
    setIsLoggedIn(false);
    console.log('User logged out');
  };


  return (
      <Router>
        <Navbar isLoggedIn={isLoggedIn} onLogout={logOutUser}/>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/profile" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>
          } />

          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login  onLogin={logInUser}/>}/>

        </Routes>
      </Router>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <div className="w-screen h-[100%]flex flex-col ">
      <NavBar
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Home isUserLoggedIn={isUserLoggedIn}/>} />
        <Route
          path="login"
          element={<Login setIsUserLoggedIn={setIsUserLoggedIn} />}
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute isUserLoggedIn={isUserLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="signup"
          element={<Signup setIsUserLoggedIn={setIsUserLoggedIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;

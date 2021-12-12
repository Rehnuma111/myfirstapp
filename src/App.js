import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/Login";
import Header from "./components/Header";
import EventHandling from "./components/Eventhandling";
import Signup from "./components/signup";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useState } from "react";
import ManageUsers from "./components/ManageUsers";

function App() {


  const [darktheme, setDarktheme] = useState(true);
  const myCustomTheme = createTheme({
    palette: {
      mode: darktheme ? "dark" : "light",
      secondary: {
        main: "#c76000",
        dark: "#262220",

      },
    },
  });
  return (
    <div>

      <ThemeProvider theme={myCustomTheme}>
        <BrowserRouter>
          <Header darktheme={darktheme} setDarktheme={setDarktheme} />

          <Routes>
            <Route element={<Home />} path="/home" />
            <Route element={<Login />} path="/login" />
            <Route element={< EventHandling />} path="/event" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<ManageUsers />} path="/ManageUsers" />
           


            {/* redirecting */}
            <Route path="/" element={<Navigate replace to="/login" />} />
          </Routes>

          {/* Invalid Way for routing in SPA */}
          {/* <a href="/login">Login</a> */}

          {/* For navigating to component routes without page refresh */}
          {/* <Link to="/login">Go to Login</Link> */}
          {/* <Link to="/home">Go to Home</Link> */}
        </BrowserRouter>
      </ThemeProvider>


    </div>
  );
}

export default App;
import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import About from "./pages/About";
import Ships from "./pages/Ships";
import Header from "./components/Header/Header";
import Error from "./pages/Error";

function App() {
  function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    }, []);
    return null;
  }

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Ships />} />
          <Route path="/about" element={<About />} />
          <Route path="/ships/:id" element={<About />} />
          <Route path="/ships" element={<Ships />} />
          <Route path="/error" element={<Error />} />
          {/*<Route path="*" element={<Redirect to="/error" />}></Route>*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

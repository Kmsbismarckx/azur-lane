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
import { HeaderContext } from "./context";
import prototypeShipsData from "./prototypeShips.json";

function App() {
  const prototypeShips = prototypeShipsData["prototypes"];
  const [ships, setShips] = useState(prototypeShips);
  const [aboutShip, setAboutShip] = useState({});
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
        <HeaderContext.Provider
          value={{ ships, setShips, aboutShip, setAboutShip }}
        >
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/ships" element={<Ships />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Redirect to="/error" />}></Route>
          </Routes>
        </HeaderContext.Provider>
      </Router>
    </div>
  );
}

export default App;

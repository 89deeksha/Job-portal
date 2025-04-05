import React from "react";
import Dashboard1 from "./Dashboard1";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./Dashboard3";
import Landingpage from "./Components/Landingpage/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        

      </Routes>
    </Router>
  );
}

export default App;

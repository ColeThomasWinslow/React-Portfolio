import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Conformation from "./Pages/Conformation";
import Resume from "./Pages/Resume";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/confirm" element={<Conformation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

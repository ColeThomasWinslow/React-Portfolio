import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Conformation from "./Pages/Conformation";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/confirm" element={<Conformation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Household from "./pages/Household";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Router>
          <Routes>
            <Route exact path="/" element={<Household />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

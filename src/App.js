import "./App.css";
import Household from "./pages/Household";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import AddExpenses from "./pages/AddExpenses";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/household" element={<Household />} />
          <Route path="/addexpenses" element={<AddExpenses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

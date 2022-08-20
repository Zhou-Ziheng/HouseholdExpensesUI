import "./App.css";
import Household from "./pages/Household";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import AddExpenses from "./pages/AddExpenses";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";
import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();

  const [login, setLogin] = useState(cookies.get("userid") !== undefined);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/signup"
            element={<Signup loggedin={login} setLogin={setLogin} />}
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/signin"
            element={<Signin loggedin={login} setLogin={setLogin} />}
          />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/household" element={<Household />} />
          <Route path="/addexpenses" element={<AddExpenses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Household from "./pages/Household";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import AddExpenses from "./pages/AddExpenses";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect, useMemo, useState } from "react";
import Cookies from "universal-cookie";
import Navbar from "./components/Navbar/Navbar";
import CreateHousehold from "./components/CreateHousehold/CreateHousehold";
import PsDash from "./components/PsDashboard/PsDash";
function App() {
  const cookies = useMemo(() => new Cookies(), []);

  const [login, setLogin] = useState(cookies.get("userid") !== undefined);

  useEffect(() => {
    setLogin(cookies.get("userid") !== undefined);
  }, [cookies]);

  return (
    <div className="App">
      <Navbar loggedin={login} setLogin={setLogin} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/signup"
            element={<Signup loggedin={login} setLogin={setLogin} />}
          />
          <Route
            path="/createFamily"
            element={<CreateHousehold loggedin={login} />}
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/signin"
            element={<Signin loggedin={login} setLogin={setLogin} />}
          />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/PsDash" element={<PsDash />} />
          <Route path="/household" element={<Household />} />
          <Route path="/addexpenses" element={<AddExpenses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

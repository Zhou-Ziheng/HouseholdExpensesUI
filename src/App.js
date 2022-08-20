import "./App.css";
import Household from "./pages/Household";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Household />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/household" element={<Household />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

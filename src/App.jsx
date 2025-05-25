import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import CreateAcc from "./pages/CreateAcc/CreateAcc";

function App() {
  return (
    <Router basename="/online-store-frontend">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createacc" element={<CreateAcc />} />
      </Routes>
    </Router>
  );
}

export default App;

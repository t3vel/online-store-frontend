import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Signup from '@pages/Signup/Signup';
import Login from '@pages/Login/Login';
import CreateAcc from '@pages/CreateAcc/CreateAcc';
import RegistrationSuccess from '@pages/RegistrationSuccess/RegistrationSuccess';
import Profile from '@pages/Profile/Profile';
import ScrollToTop from '@components/utils/ScrollToTop';
import Catalog from '@pages/Catalog/Catalog';

function App() {
  return (
    <Router basename="/online-store-frontend">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createacc" element={<CreateAcc />} />
        <Route path="/successreg" element={<RegistrationSuccess />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;

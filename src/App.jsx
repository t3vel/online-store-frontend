import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import {
  Home,
  Signup,
  Login,
  CreateAcc,
  RegistrationSuccess,
  Profile,
  Catalog,
  Item,
  Cart,
  CalculatorBMI,
  News,
  OurMission,
} from '@pages';
import ScrollToTop from '@components/utils/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';

function App() {
  return (
    <Router basename="/online-store-frontend">
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createacc" element={<CreateAcc />} />
            <Route path="/successreg" element={<RegistrationSuccess />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<Item />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/calculator" element={<CalculatorBMI />} />
            <Route path="/news" element={<News />} />
            <Route path="/our-mission" element={<OurMission />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

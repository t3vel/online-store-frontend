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
} from '@pages';
import ScrollToTop from '@components/utils/ScrollToTop';

function App() {
  return (
    <Router basename="/online-store-frontend">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createacc" element={<CreateAcc />} />
          <Route path="/successreg" element={<RegistrationSuccess />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/calculator" element={<CalculatorBMI />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

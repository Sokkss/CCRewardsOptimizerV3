import './App.css';

import HomePage from './components/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <SiteNav />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;

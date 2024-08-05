import { Routes, Route } from 'react-router-dom';
import Home from './../pages/Home/Home';
import Login from './../pages/Login/Login';
import Support from './../pages/Support/Support';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default RoutesApp;
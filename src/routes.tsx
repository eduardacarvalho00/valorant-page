import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Pages } from './Pages';
import { Login } from './Pages/Login';

export default function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Pages />} />
      </Routes>
    </Router>
  );
}

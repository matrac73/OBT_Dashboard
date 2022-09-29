import ReactDOM from 'react-dom';
import Login from './Login';
import App from './App';
import Dashboard from './components/Dashboard';

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<App />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

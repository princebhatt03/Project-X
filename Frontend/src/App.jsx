import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import UserHomePage from './pages/user/UserHomePage';
import FrontPage from './pages/FrontPage';
import AdminHomePage from './pages/admin/AdminHomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* "/" Route for Frontpage */}
        <Route
          path="/"
          element={<FrontPage />}
        />

        {/* User Routes */}

        <Route
          path="/userHome"
          element={<UserHomePage />}
        />

        {/* Admin Routes */}

        <Route
          path="/adminHome"
          element={<AdminHomePage />}
        />

        {/* 404 Error */}
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

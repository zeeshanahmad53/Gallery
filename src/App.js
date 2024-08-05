// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import GalleryLayout from './components/GalleryLayout';
import ImageUpload from './components/imgUpload';
import { AuthProvider, useAuth } from './components/AuthContext';
import ProtectedRoute from './components/authrizedUser';
import About from './components/About';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainContent />
      </Router>
    </AuthProvider>
  );
}

function MainContent() {
  const { currentUser } = useAuth();

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/gallery"
          element={<ProtectedRoute element={<GalleryLayout />} />}
        />
        <Route
          path="/uploading"
          element={<ProtectedRoute element={<ImageUpload />} />}
        />

        <Route
          path="*"
          element={<Navigate to={currentUser ? "/gallery" : "/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;

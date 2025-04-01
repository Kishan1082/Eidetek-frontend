import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Landing page"; 
import LandingPage2 from "./pages/LandingPage2/Landing page 2";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpForm from "./pages/SignupPage/SignupForm";
import ChatbotUI from "./pages/ChatbotUI/ChatbotUI";
import UploadInput from "./pages/UploadPage/UploadInput";
import "./App.css";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";


function App() {
  return (
    <Router>
      <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-page-2" element={<ProtectedRoute element={<LandingPage2 />} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/chatbot" element={<ProtectedRoute element={<ChatbotUI />} />} />
          <Route path="/upload" element={<ProtectedRoute element={<UploadInput />} />} />
        </Routes>
        </div>
      </AuthProvider>
      
    </Router>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Landing page"; 
import LandingPage2 from "./pages/LandingPage2/Landing page 2";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpForm from "./pages/SignupPage/SignupForm";
import ChatbotUI from "./pages/ChatbotUI/ChatbotUI";
import UploadInput from "./pages/UploadPage/UploadInput";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-page-2" element={<LandingPage2 />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/chatbot" element={<ChatbotUI />} />
          <Route path="/upload" element={<UploadInput />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

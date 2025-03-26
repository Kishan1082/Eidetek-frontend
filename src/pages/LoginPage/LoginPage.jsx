"use client";
import React from "react";
import Logo from "./Logo";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

function SignupButton() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <button className="w-[25%] h-12 mt-4 px-8 py-4 text-base font-medium rounded-3xl bg-black text-white transition-all duration-200 ease-in-out hover:bg-gray-900" onClick={handleClick} type="button">
      Sign up
    </button>
  );
}

function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://10.0.0.165:5000/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate("/landing-page-2");
      } 
    } catch (error) {
      setError("Failed to login");
    }
  };

  return (
    <main className="flex overflow-hidden flex-col items-center px-14 py-16 bg-white max-md:px-5">
      {/* Main content */}
      <header className="w-full flex justify-left mb-4">
        <Logo />
      </header>
      <h1 className="mb-0.5 text-3xl font-medium text-zinc-800">Log in</h1>
      <br />
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <div className="text-left">
          <InputField
            label="Email address or user name"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="text-left">
          <InputField
            label="Password"
            type="password"
            showHideOption={true}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button className="w-full h-12 mt-4 px-8 py-4 text-base font-medium rounded-3xl bg-black text-white transition-all duration-200 ease-in-out hover:bg-gray-900">
          Log in
        </button>
      </form>
      <div className="mt-6 text-gray-700 text-sm">Don’t have an account?</div>
      <SignupButton />
    </main>

  );
}

export default LoginPage;
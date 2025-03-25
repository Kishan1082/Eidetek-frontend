"use client";
import React from "react";
import Logo from "./Logo";
import SocialLoginButton from "./SocialLoginButton";
import Divider from "./Divider";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

function SignupButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <button className="all-[unset] box-border relative w-[500px] h-[50px] rounded-[32px] overflow-hidden border border-solid border-[#111111]" onClick={handleClick}>
    <div className="inline-flex items-center justify-center gap-2 relative top-3 left-52">
    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto_Mono-Regular',Helvetica] font-normal text-[#111111] text-xl text-center tracking-[0] leading-[normal]">
    Sign up
    </div>
    </div>
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
      console.log(username, password);
      const response = await fetch("http://10.0.0.165:5000/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data);
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
      <Logo />

      <h1 className="text-3xl font-medium text-center text-zinc-800">Log in</h1>

      <section className="flex flex-col mt-5 max-w-full min-h-[350px] w-[500px]">
        <InputField
          label="Email address or user name"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <div className="mt-6 w-full h-[87px]">
          <div className="flex flex-col items-end w-full">
            <InputField
              label="Password"
              type="password"
              showHideOption={true}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              className="mt-2 text-base text-right underline text-neutral-900"
              onClick={handleSubmit}
            >
              Login
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto_Mono-Medium',Helvetica] font-medium text-[#333333] text-[22px] text-center tracking-[0] leading-[normal]">
        Don’t have an account?
        </div>
        <SignupButton />
      </section>
    </main>
  );
}

export default LoginPage;
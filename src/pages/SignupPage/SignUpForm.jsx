"use client";
import React from "react";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LogInLink() {
  return (
    <Link to="/login" className="underline hover:text-blue-800 focus:outline-none">Log in</Link>
  );
}

function SignUpForm() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch("http://10.0.0.165:5000/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.status === 200) {
          console.log("Signup successful!");
          navigate("/login");
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError("Failed to signup");
      }
    }; 
  return (
    <main className="flex overflow-hidden flex-col items-center px-14 py-16 bg-white max-md:px-5">
      <Logo />
        <section className="flex flex-col items-center mx-auto max-w-[715px]">
        <header>
            <h1 className="mb-0.5 text-3xl font-medium text-zinc-800">
            Create an account
            </h1>
            <br />
            <h2 className="mb-11 text-base text-neutral-900">
              Already have an account?
              <LogInLink className="ml-2 " />
            </h2>
        </header>

        <form className="w-full">
            
        <FormInput
          label="What's your email?"
          placeholder={"Enter your email address"}
          type="email"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
            <PasswordInput
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

            <p className="mb-2 text-base text-neutral-900">
            By creating an account, you agree to the{" "}
            <a href="#" className="underline text-neutral-900">
                Terms of use
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-neutral-900">
                Privacy Policy.
            </a>
            </p>

            <button
            type="submit"
            className="w-full h-12 mt-4 px-8 py-4 text-base font-medium rounded-3xl bg-black text-white transition-all duration-200 ease-in-out hover:bg-gray-900"
            onClick={handleSubmit}
            >
            Create an account
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </form>

        </section>
    </main>
  );
}

export default SignUpForm;

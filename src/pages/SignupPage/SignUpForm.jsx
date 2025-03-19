"use client";
import React from "react";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import SocialButton from "./SocialButton";
import Logo from "./Logo";

function SignUpForm() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-14 py-16 bg-white max-md:px-5">
      <Logo />
        <section className="flex flex-col items-center mx-auto max-w-[715px]">
        <header>
            <h1 className="mb-0.5 text-3xl font-medium text-zinc-800">
            Create an account
            </h1>
            <p className="mb-11 text-base text-neutral-900">
            Already have an ccount?{" "}
            <a href="#" className="underline text-neutral-900">
                Log in
            </a>
            </p>
        </header>

        <form className="w-full">
            <FormInput
            label="What should we call you?"
            type="text"
            placeholder="Enter your profile name"
            />

            <FormInput
            label="What's your email?"
            type="email"
            placeholder="Enter your email address"
            />

            <PasswordInput />

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
            className="mb-3 w-full h-16 text-2xl font-medium text-white opacity-25 bg-neutral-900 rounded-[40px]"
            >
            Create an account
            </button>
        </form>

        <div className="mb-3 text-2xl text-stone-500">Or continue with</div>

        <SocialButton
            icon={
            <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M22.501 12.7331C22.501 11.8698 22.4296 11.2398 22.2748 10.5864H12.2153V14.483H18.12C18.001 15.4514 17.3582 16.9097 15.9296 17.8897L15.9096 18.0202L19.0902 20.4349L19.3106 20.4564C21.3343 18.6247 22.501 15.9297 22.501 12.7331Z"
                fill="#4285F4"
                ></path>
                <path
                d="M12.214 23.0001C15.1068 23.0001 17.5353 22.0667 19.3092 20.4567L15.9282 17.89C15.0235 18.5083 13.8092 18.94 12.214 18.94C9.38069 18.94 6.97596 17.1083 6.11874 14.5767L5.99309 14.5871L2.68583 17.0955L2.64258 17.2133C4.40446 20.6433 8.0235 23.0001 12.214 23.0001Z"
                fill="#34A853"
                ></path>
                <path
                d="M6.12046 14.5767C5.89428 13.9234 5.76337 13.2233 5.76337 12.5C5.76337 11.7767 5.89428 11.0767 6.10856 10.4234L6.10257 10.2842L2.75386 7.7356L2.64429 7.78667C1.91814 9.21002 1.50146 10.8084 1.50146 12.5C1.50146 14.1917 1.91814 15.79 2.64429 17.2133L6.12046 14.5767Z"
                fill="#FBBC05"
                ></path>
                <path
                d="M12.2141 6.05997C14.2259 6.05997 15.583 6.91163 16.3569 7.62335L19.3807 4.73C17.5236 3.03834 15.1069 2 12.2141 2C8.02353 2 4.40447 4.35665 2.64258 7.78662L6.10686 10.4233C6.97598 7.89166 9.38073 6.05997 12.2141 6.05997Z"
                fill="#EB4335"
                ></path>
            </svg>
            }
            text="Google"
        />
        </section>
    </main>
  );
}

export default SignUpForm;

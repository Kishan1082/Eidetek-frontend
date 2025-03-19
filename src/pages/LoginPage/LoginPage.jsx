"use client";
import React from "react";
import Logo from "./Logo";
import SocialLoginButton from "./SocialLoginButton";
import Divider from "./Divider";
import InputField from "./InputField";
import CheckboxField from "./CheckBoxField";
import ActionButton from "./ActionButton";

function LoginPage() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-14 py-16 bg-white max-md:px-5">
      <Logo />

      <h1 className="text-3xl font-medium text-center text-zinc-800">Log in</h1>

      <SocialLoginButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0c6964178a5f932163df19388e0fbed663a80a88?placeholderIfAbsent=true&apiKey=08467026694342f59e19e940d07320ef"
        text="Continue with Google"
      />

      <Divider text="OR" className="mt-5" />

      <section className="flex flex-col mt-5 max-w-full min-h-[350px] w-[500px]">
        <InputField label="Email address or user name" type="text" />

        <div className="mt-6 w-full h-[87px]">
          <div className="flex flex-col items-end w-full">
            <InputField
              label="Password"
              type="password"
              showHideOption={true}
            />
            <button className="mt-2 text-base text-right underline text-neutral-900">
              Forget your password
            </button>
          </div>
        </div>

        <CheckboxField label="Remember me" className="mt-6" />

        <ActionButton text="Log in" primary={true} className="mt-6" />
      </section>

      <Divider className="mt-5" />

      <section className="flex flex-col justify-center items-center mt-6 max-w-full text-center w-[500px]">
        <h2 className="text-2xl font-medium text-zinc-800">
          Don't have an account?
        </h2>

        <ActionButton text="Sign up" primary={false} className="mt-4" />
      </section>
    </main>
  );
}

export default LoginPage;

import React from "react";

function HeroSection() {
  return (
    <section className="flex relative flex-col items-center self-center px-20 pt-48 pb-28 mt-9 max-w-full text-center text-black rounded-none min-h-[388px] w-[1028px] max-md:px-5 max-md:py-24">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae4f15b128356afa96315aa302b7d2e316ad220a?placeholderIfAbsent=true&apiKey=08467026694342f59e19e940d07320ef"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col -mb-6 max-w-full w-[789px] max-md:mb-2.5">
        <h1 className="text-3xl font-medium tracking-tight leading-loose max-md:max-w-full">
          Store what matters, recall when it counts.
        </h1>
        <p className="self-center mt-8 text-xl max-md:max-w-full">
          Keep important info at your fingertips, always.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-center font-kode-mono animate-fade-out whitespace-nowrap">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="text-5xl mb-5 mt-10">Thatchai Taikla</div>
          <div className="text-4xl">
            I'm a coding passionate and I'm willing to do everything to
            <span className="font-extrabold"> ACHIEVE THE GOAL.</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <img
          className="w-1/3"
          src="src/picture/Hero.jpg"
          alt="coding computer"
        />
      </div>
    </>
  );
}

import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-end gap-5 mt-5 mr-5 ml-5 mb-10 font-kode-mono">
        <button
          type="button"
          className="text-black bg-white rounded text-lg px-5 py-2.5 text-center me-1 mb-2 hover:scale-110"
        >
          About Me
        </button>
        <button
          type="button"
          className="text-black bg-white rounded text-lg px-5 py-2.5 text-center me-1 mb-2 hover:scale-110"
        >
          Portfolio
        </button>
        <button
          type="button"
          className="text-black bg-white rounded text-lg px-5 py-2.5 text-center me-1 mb-2 hover:scale-110"
        >
          Contact Me
        </button>
        <button
          type="button"
          className="text-purple-800 border-4 duration-300 border-purple-800 hover:bg-purple-800 hover:text-white rounded-3xl text-lg px-5 py-2.5 text-center me-1 mb-2"
        >
          CV download
        </button>
      </nav>
    </>
  );
}

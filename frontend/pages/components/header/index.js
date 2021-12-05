import React from "react";

export default function index() {
  return (
    <header className="bg-gray-300 bg-opacity-50 h-32 flex flex-col justify-evenly items-center">
      <div className="flex justify-between w-full px-3">
        <p>LOGO</p>
        <p>nome-Empresa</p>
      </div>
      <div className="pesquisa">
        <span
          className="
            py-1
            px-3
            m-1
            bg-gray-500
            text-white
            rounded-md
          "
        >
          P
        </span>
        <input
          type="text"
          placeholder="pesquisa"
          className="
                border-2
                border-black
                placeholder-black
                rounded-lg
                px-3
            "
        />
      </div>
    </header>
  );
}

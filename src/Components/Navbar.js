import React from "react";

export default function Navbar() {
  return (
    <div className="bg-emerald-800 h-16 px-3 flex justify-between">
      <div className="flex cursor-pointer">
        <img
          src="https://media.neliti.com/media/organisations/logo-155-universitas-islam-45-bekasi.png"
          alt="logo"
          className="w-14 h-12 my-auto"
        />
        <span className="my-auto ml-3 text-2xl text-white font-serif font-bold">
          Universitas Islam 45 Bekasi
        </span>
      </div>
      <div className="flex">
        <span className="my-auto text-white px-3 text-xl cursor-pointer">
          Home
        </span>
        <span className="my-auto text-white px-3 text-xl cursor-pointer">
          About Me
        </span>
        <span className="my-auto text-white px-3 text-xl cursor-pointer">
          Features
        </span>
        <span className="my-auto text-white px-3 text-xl cursor-pointer">
          Logout
        </span>
      </div>
    </div>
  );
}

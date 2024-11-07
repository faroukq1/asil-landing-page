"use client";
import Image from "next/image";
import image from "./public/Group 11.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Page = () => {
  const [dark, setDark] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setDark(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    setDark((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark);
    localStorage.setItem("theme", dark);
  }, [dark]);

  return (
    <div className="relative mx-auto max-w-6xl xl:max-w-7xl px-8 h-screen flex flex-col justify-center items-center gap-8">
      <Image src={image} alt="hero image" className="mt-16" />
      <div className="mt-8 flex flex-col items-center gap-4">
        <h1 className="text-center text-3xl lg:text-5xl font-semibold">
          This page is under maintenance.
        </h1>
        <p className="text-center text-lg lg:text-xl font-light w-3/4">
          We searched everywhere but couldn’t find what you’re looking for.
          Let’s find a better place for you to go.
        </p>
      </div>
      <button
        onClick={toggleTheme}
        className="absolute top-10 right-10 text-4xl btn"
      >
        {dark === "dark" ? <MdDarkMode /> : <MdLightMode />}
      </button>
      <a
        target="_blank"
        href="https://instagram.com/assil_dif/"
        className="absolute top-10 right-24 text-4xl mr-6 btn"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default Page;

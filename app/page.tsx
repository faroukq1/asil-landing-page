"use client";
import Image from "next/image";
import image from "./public/Group 11.png";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";

const page = () => {
  const currTheme = localStorage.getItem("theme") || "dark";
  const [dark, setDark] = useState(currTheme);
  const toggleTheme = () =>
    setDark((prev) => (prev == "dark" ? "light" : "dark"));

  useEffect(() => {
    if (dark === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return (
    <div className="relative mx-auto max-w-6xl xl:max-w-7xl px-8 h-screen flex flex-col justify-center items-center gap-8">
      <Image src={image} alt="hero image" />
      <div className="mt-8 flex flex-col items-center gap-4">
        <h1 className="text-center text-5xl font-semibold">
          This page is under maintance.
        </h1>
        <p className="text-center text-xl font-light w-3/4">
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
        href="https://instagram.com/assil_dif/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-10 right-24 text-4xl mr-6 btn"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default page;

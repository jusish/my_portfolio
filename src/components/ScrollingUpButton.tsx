"use client";
import Image from "next/image";
import upArrowIcon from "../../public/icon/upArrow.svg";
import React, { useEffect, useState } from "react";

const ScrollButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show Scroll Up button after scrolling past 100vh
      setShowScrollUp(scrollY > windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Up Button */}
      <div
        className={`fixed bottom-8 right-10 z-50 transition-opacity duration-500 ${
          showScrollUp ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <div className="bg-purple-600 w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer group transition-all duration-300 hover:shadow-purple-glow hover:scale-110">
          <Image
            alt="upArrow"
            src={upArrowIcon}
            className="w-[20px] transition-transform duration-300 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </>
  );
};
export default ScrollButtons;

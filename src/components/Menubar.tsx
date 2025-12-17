"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

interface menuInterface {
  home?: boolean;
  isContactVisible?: boolean;
}

const Menubar = ({ home, isContactVisible = false }: menuInterface) => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    ...(isContactVisible ? [{ href: "/contact", label: "Contact" }] : []),
  ];

  return (
    <nav className={`${home && "hidden md:flex"}`}>
      <ul className="flex items-center gap-1 font-medium text-sm">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isActive && (
                    <motion.div
                      className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.label}
                </span>

                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-lg border border-purple-500/30"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover underline */}
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menubar;

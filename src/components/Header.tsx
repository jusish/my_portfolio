"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AlignJustify,
  X,
  Home,
  FolderKanban,
  User,
  MessageSquare,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        menuOpen &&
        target &&
        !target.closest("#sidebar-menu") &&
        !target.closest("#mobile-menu-btn")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderKanban },
    { href: "/about", label: "About", icon: User },
    { href: "/stories", label: "Stories", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 h-screen w-24 flex-col items-center py-8 border-r border-purple-900/30 bg-black/40 backdrop-blur-xl z-50"
        id="sidebar-menu"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="mb-12"
        >
          <Link href="/" className="flex flex-col items-center gap-1 group">
            <motion.div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-purple-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              J
            </motion.div>
            <span className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors font-medium">
              Justin
            </span>
          </Link>
        </motion.div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`relative group flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  title={item.label}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="sidebarActive"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-500 rounded-r-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`relative z-10 p-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-purple-600/20 shadow-purple-glow"
                        : "group-hover:bg-gray-800/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Label */}
                  <span className="text-[10px] font-medium">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </aside>

      {/* Mobile/Tablet Top Bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden fixed w-full top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-purple-500/20 shadow-lg"
      >
        <div className="px-4 md:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-white font-bold shadow-purple-glow">
                J
              </div>
              <span className="text-white font-bold text-lg">
                Justin<span className="text-purple-400">.</span>
              </span>
            </Link>

            {/* Menu Button */}
            <motion.button
              id="mobile-menu-btn"
              className="p-2 rounded-lg text-white hover:bg-purple-600/20 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AlignJustify className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-purple-500/20 bg-black/95 backdrop-blur-2xl"
            >
              <nav className="px-4 py-4">
                <ul className="flex flex-col gap-2">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                            isActive
                              ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                              : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;

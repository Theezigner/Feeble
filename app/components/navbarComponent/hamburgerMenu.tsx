"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./navLinks";
import ContactSales from "./contactSales";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50 relative"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-text-primary"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-text-primary"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-text-primary"
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-8 shadow-navbar"
          >
            <div className="flex flex-col items-center gap-8">
              <NavLink mobile={true} onLinkClick={() => setIsOpen(false)} />
              <ContactSales />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import logo from "@/public/logo/Logo1.png";
import { TbMenuDeep } from "react-icons/tb";
import { IoCloseOutline, IoChevronDown } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        aria-label="Main Navigation"
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "top-2 sm:top-4 px-2 sm:px-6" : "top-10 px-0 md:px-6"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-lg border border-slate-200/50 shadow-xl rounded-2xl md:rounded-3xl"
              : "bg-white border-b border-slate-100"
          }`}
        >
          <div className="flex justify-between h-16 md:h-20 items-center px-4 md:px-8">
            {/* Logo Section */}
            <Link
              href="/"
              aria-label="Annai Agro Tradings - Home"
              className="flex items-center gap-2 md:gap-3 group shrink-0"
            >
              <div className="relative w-20 h-20 md:w-14 md:h-20 xl:h-25 xl:w-25 overflow-hidden rounded-xl">
                <Image
                  src={logo}
                  alt="Annai Agro Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-110"
                  priority
                />
              </div>
              <div className="flex flex-col ml-2">
                <span className="font-heading text-lg md:text-xl font-black text-slate-900 leading-none tracking-tight">
                  ANNAI AGRO
                </span>
                <span className="text-[10px] md:text-xs font-bold  tracking-[0.2em] uppercase">
                  Tradings
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (lg+) */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div key={link.name} className="relative group px-2">
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative py-2 text-sm font-bold transition-colors duration-300 flex items-center gap-1.5 ${
                        isActive
                          ? "text-[#1a1a1a]"
                          : "text-slate-500 hover:text-[#67944e]"
                      }`}
                    >
                      {link.name}
                      {link.subLinks && (
                        <IoChevronDown
                          className="text-xs opacity-50 transition-transform group-hover:rotate-180"
                          aria-hidden="true"
                        />
                      )}

                      {/* Animated Brand Underline */}
                      <span
                        className={`absolute -bottom-1 left-0 h-[2.5px] w-full transition-all duration-500 ease-in-out ${
                          isActive
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                        } origin-left overflow-hidden rounded-full`}
                      >
                        {/* Moving Gradient using Logo Green */}
                        <span className="absolute inset-0 bg-linear-to-r from-[#67944e] via-[#86b06a] to-[#1a1a1a] bg-size-[200%_auto] animate-gradient-x" />
                      </span>
                    </Link>

                    {/* Dropdown Menu */}
                    {link.subLinks && (
                      <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-56 bg-white border border-slate-100 shadow-2xl rounded-2xl p-2 overflow-hidden">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-green-700 transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-block md:hidden lg:inline-block bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/20 transition-all active:scale-95 uppercase"
              >
                Get Started
              </Link>

              {/* Mobile Menu Toggle (Below lg) */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Navigation Menu"
                aria-expanded={isOpen}
                className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <TbMenuDeep size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Slide-out Drawer (Mobile/Tablet) */}
      <div
        className={`fixed inset-0 z-100 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="relative w-25 h-25">
                <Image src={logo} alt="Logo" fill className="object-contain" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 bg-slate-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <IoCloseOutline size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-1 overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.href}
                    className="text-xl  text-slate-900 py-4 flex justify-between items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="flex flex-col pl-4 mb-4 border-l-2 border-green-100 gap-4">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-slate-800 font-medium hover:text-green-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100">
              <button className="w-full bg-black text-white py-4 rounded-2xl font-black shadow-lg uppercase hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/20 transition-all active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

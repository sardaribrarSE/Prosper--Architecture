'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
const navItems = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Perspective", href: "#" },
  { label: "Company Profile", href: "#" },
  { label: "Client Login", href: "#" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {showTopBar && (
        <div className="fixed top-0 z-50 w-full bg-[#f6f3ee] px-4 py-3">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
            <span className="text-sm text-gray-900 sm:text-base">
              The hospitality minds series: the future of workshops
            </span>
            <a
              href="#"
              className="text-sm font-semibold text-red-600 underline"
            >
              Register Now
            </a>
          </div>

          <button
            onClick={() => setShowTopBar(false)}
            aria-label="Close banner"
            className="absolute right-3 top-3 text-2xl text-gray-900 hover:opacity-70"
          >
            &times;
          </button>
        </div>
      )}
      <header
        className="fixed z-40 w-full bg-white/80 backdrop-blur-md "
        style={{ top: showTopBar ? "50px" : "0px" }}
      >
        <div className="flex items-center justify-between px-4 py-5 md:px-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl text-black tracking-tight md:text-3xl"
          >
            PROSPER
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-6">
            {/* Menu Icon */}
            <button
              onMouseEnter={() => setMenuOpen(true)}
              aria-label="Open menu"
               className="text-2xl text-zinc-900 hover:opacity-70 transition"
            >
               <FontAwesomeIcon icon={faSwatchbook} />
            </button>

            <button className="hidden md:inline-flex items-center gap-2 rounded-sm bg-black px-5 py-2 text-xs font-medium uppercase tracking-wide text-white">
              Book a Call <span className="text-lg">↗</span>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-[100] bg-black text-white transition-transform duration-500 ease-in-out ${
          menuOpen
            ? "translate-y-0 pointer-events-auto"
            : "-translate-y-full pointer-events-none"
        }`}
      >
        {/* Top Row */}
        <div className="flex items-center justify-between px-4 py-6 md:px-20">
          <span className="text-xl font-bold">PROSPER</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-sm uppercase tracking-widest"
          >
            Close 
          </button>
        </div>

        {/* Menu */}
        <div className="flex h-full flex-col justify-center px-6 md:px-32">
          <nav className="space-y-8">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-4xl font-light tracking-tight hover:opacity-60 md:text-6xl"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-16">
            <button className="inline-flex items-center gap-3 border border-white px-8 py-4 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black">
              Book a Call <span className="text-lg">↗</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

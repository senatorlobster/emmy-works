"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-zinc-900 shadow-md sticky top-0 z-50 dark:bg-zinc-900 dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/lightbulb.svg" // or /lightbulb-glow.svg
              alt="Emmy Works logo"
              width={32}
              height={32}
              priority
            />
            <span className="text-2xl font-bold tracking-tight">
              Emmy Works
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              About
            </Link>
            <Link
              href="/writing"
              className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Writing
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
            className="rounded-md p-2 md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (animated) */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden bg-white dark:bg-zinc-900 px-4",
          "overflow-hidden",
          "transition-[max-height,opacity,transform] duration-300 ease-out",
          isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2",
        ].join(" ")}
      >
        <div className="space-y-2 py-3">
          <Link href="/" className="block rounded px-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            Home
          </Link>
          <Link href="/about" className="block rounded px-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            About
          </Link>
          <Link href="/writing" className="block rounded px-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            Writing
          </Link>
          <Link href="/contact" className="block rounded px-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200 bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-900"
          onClick={() => setIsOpen(false)}
        >
          DE Portfolio
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
            const isCurrentPage = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrentPage ? "page" : undefined}
                className={`border-b-2 py-2 text-sm transition-colors ${
                  isCurrentPage
                    ? "border-zinc-950 font-medium text-zinc-950"
                    : "border-transparent text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-zinc-700 hover:bg-zinc-100 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="text-lg">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-zinc-200 px-6 py-3 md:hidden"
        >
          <div className="flex flex-col">
            {navigation.map((item) => {
              const isCurrentPage = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrentPage ? "page" : undefined}
                  className={`border-l-2 py-3 pl-3 text-sm ${
                    isCurrentPage
                      ? "border-zinc-950 font-medium text-zinc-950"
                      : "border-transparent text-zinc-700 hover:text-zinc-950"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
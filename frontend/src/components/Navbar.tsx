"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  logoText?: string;
}

export default function Navbar({ logoText = "TAEHO JEON" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll state for dynamic styling if needed
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#tech-stack" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      } else if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <nav
        className={`pointer-events-auto mx-auto max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 ${scrolled ? 'bg-white/10 shadow-lg shadow-black/20' : ''}`}
        aria-label="Main Navigation"
      >
        <div className="px-6 md:px-8 h-16 flex items-center justify-between">
          {/* 로고 영역 */}
          <Link
            href="#"
            onClick={(e) => handleSmoothScroll(e, "#")}
            className="text-white font-bold tracking-widest text-lg uppercase whitespace-nowrap"
            aria-label="Go to home"
          >
            {logoText}
          </Link>

          {/* 데스크톱 내비게이션 영역 */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 모바일 메뉴 토글 버튼 */}
          <button
            className="md:hidden text-neutral-300 hover:text-white transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-base font-medium text-neutral-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

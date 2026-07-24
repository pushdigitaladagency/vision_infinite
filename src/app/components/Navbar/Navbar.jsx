"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/" || sessionStorage.getItem("scrollToContact") !== "true") {
      return;
    }

    sessionStorage.removeItem("scrollToContact");
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
  }, [pathname]);

  const handleContactClick = (event) => {
    event.preventDefault();
    setMenuOpen(false);

    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    sessionStorage.setItem("scrollToContact", "true");
    router.push("/");
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    // { label: "Our Works", href: "/works" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <Link href="/" className="navbar-logo">
         <img
  className="vision_img"
  src="/Images/Vision_Infinite_logo.webp"
  alt="Logo"
/>
        </Link>

        {/* Desktop Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : ""}
                onClick={item.label === "Contact" ? handleContactClick : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {/* Mobile-only CTA */}
          {/* <li className="mobile-cta">
            <Link href="/contact">Start a Project →</Link>
          </li> */}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="nav-cta">
          Start a Project →
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="mobile-overlay active"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [mobileOpen]);

    const navLinks = [
        { label: "What You'll Learn", href: "#learn" },
        { label: "Why It Matters", href: "#why" },
        { label: "Mentor", href: "#mentor" },
        { label: "FAQ", href: "#faq" },
    ];

    return (
        <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <div className="navbar__inner container">
                <a href="#" className="navbar__logo">
                    <span className="navbar__logo-icon">🎯</span>
                    <span className="navbar__logo-text">Skillect</span>
                </a>

                <ul className={`navbar__links ${mobileOpen ? "navbar__links--open" : ""}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="navbar__link"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="navbar__links-cta-mobile">
                        <a href="#register" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
                            Register Now
                        </a>
                    </li>
                </ul>

                <a href="#register" className="btn btn-primary navbar__cta-btn">
                    Register Now
                </a>

                <button
                    className={`navbar__hamburger ${mobileOpen ? "navbar__hamburger--open" : ""}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

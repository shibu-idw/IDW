import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./../../assets/logoidw.png";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const showAnim = gsap
      .from(headerRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.4,
        ease: "power2.out",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === 1) {
          showAnim.reverse();
        } else {
          showAnim.play();
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Divisions", href: "/division" },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-[100] bg-[#f5f5f5] border-b border-gray-200 text-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 h-20 flex justify-between items-center">
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 lg:h-12 object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-14">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xl font-semibold text-gray-600 hover:text-black transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2f4b8f] text-white px-5 py-2 text-md font-semibold hover:bg-[#1f3a7a] transition"
              >
                Get Started →
              </a>
            </li>
          </ul>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div
            className={`w-6 h-0.5 bg-gray-700 transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-gray-700 transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-gray-700 transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div
        className={`fixed inset-0 top-20 bg-[#f5f5f5] z-50 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-semibold text-gray-700 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center bg-[#2f4b8f] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1f3a7a] transition"
            >
              Get Started →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
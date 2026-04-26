import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logoidw.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const menuItems = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/service" },
    { name: "Divisions", link: "/division" },
  ];

  return (
    <header className="w-full bg-[#f5f5f5] fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-20 py-6">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 lg:h-15 object-contain" />
        </Link>

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 lg:h-15 object-contain"
          />
        </a>

        {/* Right Section */}
        <div className="flex items-center gap-6 lg:gap-10">
          <nav className="hidden lg:flex items-center gap-18 text-gray-600 text-xl font-semibold">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setActive(item.name)}
                className={`cursor-pointer transition hover:text-black ${
                  active === item.name ? "text-black" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setOpen(!open)}
            type="button"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Get Started */}
          <a
            href="/contact"
            className="hidden sm:flex items-center gap-2 bg-[#2f4b8f] text-white px-5 py-2 text-md font-semibold hover:bg-[#1f3a7a] transition"
          >
            Get Started →
          </a>

        </div>
      </div>

      {open && (
        <>
          {/* Mobile */}
          <div className="sm:hidden bg-[#f5f5f5] px-6 pb-4 space-y-4 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => {
                  setActive(item.name);
                  setOpen(false);
                }}
                className={`block px-2 py-1 rounded ${
                  active === item.name ? "bg-gray-200" : ""
                }`}
              >
                {item.name}
              </a>
            ))}

            <a
              href="/contact"
              className="block w-full text-center bg-[#2f4b8f] text-white py-2 rounded-md"
            >
              Contact Us →
            </a>
          </div>

          {/* Tablet */}
          <div className="hidden sm:block lg:hidden absolute top-[80px] right-6 w-64 bg-[#f5f5f5] shadow-lg rounded-lg p-5 space-y-4 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => {
                  setActive(item.name);
                  setOpen(false);
                }}
                className={`block px-2 py-1 rounded ${
                  active === item.name ? "bg-gray-200" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </>
      )}
    </header>
  );
}
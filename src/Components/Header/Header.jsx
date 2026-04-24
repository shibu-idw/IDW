import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logoidw.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#f5f5f5] fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-20 py-6">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 lg:h-15 object-contain"
          />
        </div>

        <div className="flex items-center gap-6 lg:gap-10">
          <nav className="hidden lg:flex items-center gap-18 text-gray-600 text-xl font-semibold">
            <Link to="/about" className="hover:text-black">
              About
            </Link>
            <Link to="/services" className="hover:text-black">
              Services
            </Link>
            <Link to="/divisions" className="hover:text-black">
              Divisions
            </Link>
          </nav>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          <button className="hidden sm:flex items-center gap-2 bg-[#2f4b8f] text-white px-5 py-2 text-md font-semibold hover:bg-[#1f3a7a] transition">
            Get Started →
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="sm:hidden bg-white px-6 pb-4 space-y-4 text-gray-700 font-medium">
            <Link to="/about" className="block" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/services" className="block" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link to="/divisions" className="block" onClick={() => setOpen(false)}>
              Divisions
            </Link>

            <button className="w-full bg-[#2f4b8f] text-white py-2 rounded-md">
              Contact Us →
            </button>
          </div>

          <div className="hidden sm:block lg:hidden absolute top-[80px] right-6 w-64 bg-white shadow-lg rounded-lg p-5 space-y-4 text-gray-700 font-medium">
            <Link to="/about" className="block" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/services" className="block" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link to="/divisions" className="block" onClick={() => setOpen(false)}>
              Divisions
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
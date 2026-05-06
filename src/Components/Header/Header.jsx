import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./../../assets/logoidw.png";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (e) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    } else {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleDivisionClick = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate("/division");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 60) setShowHeader(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const menuItems = [
    { label: "About", path: "/about" },
    { label: "Services", path: "#services", onClick: handleServiceClick },
    { label: "Divisions", path: "/division", onClick: handleDivisionClick },
  ];

  return (
    <header
      className={`fixed w-full bg-[#f5f5f5] left-0 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-20 py-6">
        {/* LOGO */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="Logo" className="h-10 lg:h-15 object-contain" />
        </Link>

        <div className="flex items-center gap-6 lg:gap-10">
          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-18 text-[#888686] text-xl font-semibold">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return item.onClick ? (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={item.onClick}
                  className={`cursor-pointer hover:text-black hover:underline ${
                    isActive ? "text-black underline" : ""
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`hover:text-black hover:underline ${
                    isActive ? "text-black underline" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP BUTTON */}
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
            className="hidden sm:flex items-center gap-2 bg-[#2f4b8f] text-white px-5 py-2 text-md font-semibold hover:bg-[#1f3a7a] transition"
          >
            Get Started →
          </button>

          {/* MOBILE / TABLET MENU ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-black"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE + TABLET MENU */}
      {open && (
        <>
          {/* MOBILE */}
          <div className="sm:hidden bg-[#f5f5f5] px-6 pb-4 space-y-4 text-[#888686] font-medium">
            {menuItems.map((item) =>
              item.onClick ? (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={item.onClick}
                  className="block px-2 py-1 rounded hover:bg-gray-200 cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block px-2 py-1 rounded hover:bg-gray-200"
                >
                  {item.label}
                </Link>
              )
            )}

            <button
              onClick={() => {
                setOpen(false);
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
              className="w-full bg-[#2f4b8f] text-white py-2 rounded-md"
            >
              Contact Us →
            </button>
          </div>

          {/* TABLET */}
          <div className="hidden sm:block lg:hidden absolute top-[80px] right-6 w-64 bg-[#f5f5f5] shadow-lg rounded-lg p-5 space-y-4 text-[#888686] font-medium">
            {menuItems.map((item) =>
              item.onClick ? (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={item.onClick}
                  className="block px-2 py-1 rounded hover:bg-gray-200 cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block px-2 py-1 rounded hover:bg-gray-200"
                >
                  {item.label}
                </Link>
              )
            )}

            <button
              onClick={() => {
                setOpen(false);
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
              className="w-full bg-[#2f4b8f] text-white py-2 rounded-md"
            >
              Contact Us →
            </button>
          </div>
        </>
      )}
    </header>
  );
}
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "./../../assets/logoidw.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ COMMON NAVIGATION FIX
  const handleNavigate = (path) => {
    setOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleServiceClick = (e) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname === "/") {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }
  };

  const menuItems = [
    { label: "About", path: "/about" },
    { label: "Services", path: "#services", onClick: handleServiceClick },
    { label: "Divisions", path: "/division" },
  ];

  return (
    <header className="w-full bg-[#f5f5f5] fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-20 py-6">
        
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 lg:h-15 object-contain" />
        </Link>

        <div className="flex items-center gap-6 lg:gap-10">

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-18 text-[#888686] text-xl font-semibold">
            {menuItems.map((item) =>
              item.onClick ? (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={item.onClick}
                  className="hover:text-black cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className="hover:text-black"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setOpen(!open)}
            type="button"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* DESKTOP BUTTON */}
          <button
            onClick={() => handleNavigate("/contact")}
            className="hidden sm:flex items-center gap-2 bg-[#2f4b8f] text-white px-5 py-2 text-md font-semibold hover:bg-[#1f3a7a] transition"
          >
            Get Started →
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
                  onClick={() => handleNavigate(item.path)}
                  className="block px-2 py-1 rounded hover:bg-gray-200"
                >
                  {item.label}
                </Link>
              )
            )}

            <button
              onClick={() => handleNavigate("/contact")}
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
                  onClick={() => handleNavigate(item.path)}
                  className="block px-2 py-1 rounded hover:bg-gray-200"
                >
                  {item.label}
                </Link>
              )
            )}

            <button
              onClick={() => handleNavigate("/contact")}
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
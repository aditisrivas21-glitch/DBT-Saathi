import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/learn", label: "Learn" },
    { to: "/quiz", label: "DBT Quiz" },
    { to: "/guide", label: "Step Guide" },
    { to: "/chatbot", label: "AI Chat" },
  ];

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2">
          <span className="text-orange-400 font-bold text-2xl">DBT</span>
          <span className="font-bold text-xl">Saathi</span>
        </Link>

        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-orange-400 transition font-medium ${
                location.pathname === l.to
                  ? "text-orange-400 underline"
                  : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-orange-400 font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
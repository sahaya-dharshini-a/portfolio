import { NavLink } from "react-router-dom";

export default function Navbar() {
  const base =
    "px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors";

  const active =
    "text-white border-b-2 border-white";

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <span className="text-lg font-semibold text-white">
          Sahaya Dharshini
        </span>

        {/* Navigation Links */}
        <div className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
            About
          </NavLink>

          <NavLink to="/skills" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
            Skills
          </NavLink>

          <NavLink to="/internships" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
            Internships
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
            Projects
          </NavLink>

          <NavLink to="/hackathons" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
            Hackathons
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? `${base} ${active}` : base}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
